import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Support JSON and urlencoded for media uploads
  app.use(express.json({ limit: "15mb" }));
  app.use(express.urlencoded({ extended: true, limit: "15mb" }));

  // Ensure uploads directory exists
  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Local Express Upload Backup Endpoint
  app.post("/api/upload", (req, res) => {
    try {
      const { image, name } = req.body;
      if (!image) {
        return res.status(400).json({ error: "No image data provided" });
      }

      // Extract base64
      const matches = image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      let buffer: Buffer;
      let extension = "png";

      if (matches && matches.length === 3) {
        const mime = matches[1];
        if (mime.includes("jpeg") || mime.includes("jpg")) extension = "jpg";
        else if (mime.includes("webp")) extension = "webp";
        else if (mime.includes("gif")) extension = "gif";
        buffer = Buffer.from(matches[2], "base64");
      } else {
        // Raw base64 string
        buffer = Buffer.from(image, "base64");
      }

      const filename = `img_${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${extension}`;
      const filePath = path.join(uploadsDir, filename);

      fs.writeFileSync(filePath, buffer);

      const fileUrl = `/uploads/${filename}`;
      console.log(`[Express Upload Server] File saved successfully: ${fileUrl}`);

      return res.json({
        success: true,
        url: fileUrl,
        filename,
        provider: "express-local",
        message: "File uploaded successfully via Express local backup"
      });
    } catch (err: any) {
      console.error("[Express Upload Server] Upload error:", err);
      return res.status(500).json({ error: err.message || "Failed to process upload" });
    }
  });

  // Serve static uploads folder
  app.use("/uploads", express.static(uploadsDir));

  // Vite middleware in dev mode
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Glow-Up Routine App running at http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
