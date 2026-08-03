import React, { useState, useEffect } from 'react';
import { StoreProductVideo } from '../../types';
import { storageHelper } from '../../utils/storage';
import { processMediaLink } from '../../utils/uploadPipeline';
import { ShoppingBag, Plus, CheckCircle2, Star, ArrowRight } from 'lucide-react';

export const StoreShowcaseTab: React.FC = () => {
  const [products, setProducts] = useState<StoreProductVideo[]>(() => storageHelper.getStoreProducts());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  // New product video form state
  const [title, setTitle] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('€24.90');
  const [videoUrl, setVideoUrl] = useState('');
  const [shopLink, setShopLink] = useState('');
  const [category, setCategory] = useState<'skincare' | 'posture' | 'mewing' | 'fitness' | 'lifestyle'>('skincare');
  const [highlightsInput, setHighlightsInput] = useState('');
  const [badge, setBadge] = useState('🔥 Top Seller');
  const [conversionCta, setConversionCta] = useState('Acquista Ora');

  useEffect(() => {
    storageHelper.saveStoreProducts(products);
  }, [products]);

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoUrl.trim() || !productName.trim()) return;

    const processed = processMediaLink(videoUrl.trim());
    const highlights = highlightsInput
      .split('\n')
      .map(h => h.trim())
      .filter(Boolean);

    const newProduct: StoreProductVideo = {
      id: `sp_${Date.now()}`,
      title: title.trim() || productName.trim(),
      productName: productName.trim(),
      price: price.trim() || '€19.99',
      videoUrl: videoUrl.trim(),
      embedUrl: processed.embedUrl,
      platform: processed.platform === 'tiktok' ? 'tiktok' : processed.platform === 'youtube' ? 'youtube' : 'other',
      category,
      shopLink: shopLink.trim() || 'https://example.com/shop',
      badge: badge.trim() || '🔥 Consigliato',
      highlights: highlights.length > 0 ? highlights : ['Prodotto di alta qualità testato', 'Spedizione rapida garantita'],
      conversionCta: conversionCta.trim() || 'Acquista Ora'
    };

    setProducts(prev => [newProduct, ...prev]);

    // Reset form
    setTitle('');
    setProductName('');
    setVideoUrl('');
    setShopLink('');
    setHighlightsInput('');
    setShowAddModal(false);
  };

  const filteredProducts = products.filter(p => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <div className="space-y-4 pb-20 pt-2 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="p-4 rounded-3xl glass-card border border-white/10 shadow-2xl space-y-2 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <ShoppingBag className="w-4 h-4 text-cyan-300" />
            <span>NEGOZIO & MEDIA SHOWCASE</span>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="py-1.5 px-3 rounded-xl bg-neon text-black font-extrabold text-xs flex items-center space-x-1 shadow-neon uppercase tracking-wider transition-all active:scale-95"
          >
            <Plus className="w-3.5 h-3.5 stroke-[3]" />
            <span>Aggiungi Video Shop</span>
          </button>
        </div>
        <h2 className="text-base font-bold text-white">
          Video Promozionali & Prodotti
        </h2>
        <p className="text-xs text-gray-400 font-medium leading-relaxed">
          Showcase multimediale organizzato con player integrati e CTA dirette all'acquisto.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 text-xs">
        {[
          { id: 'all', label: 'Tutti' },
          { id: 'skincare', label: '🧴 Skincare' },
          { id: 'posture', label: '🧍 Postura' },
          { id: 'mewing', label: '👅 Mewing' },
          { id: 'fitness', label: '💪 Fitness' }
        ].map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all shrink-0 ${
              selectedCategory === cat.id
                ? 'bg-neon text-black shadow-neon scale-105'
                : 'glass-card text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Products Showcase Grid */}
      <div className="space-y-4">
        {filteredProducts.length === 0 ? (
          <div className="p-8 text-center glass-card rounded-3xl border border-white/5 space-y-2">
            <ShoppingBag className="w-8 h-8 text-gray-600 mx-auto" />
            <p className="text-xs text-gray-400">Nessun video prodotto presente in questa categoria.</p>
          </div>
        ) : (
          filteredProducts.map(product => {
            const isPlaying = playingVideoId === product.id;
            const processed = processMediaLink(product.videoUrl);
            const embedUrl = product.embedUrl || processed.embedUrl;

            return (
              <div
                key={product.id}
                className="p-4 rounded-3xl glass-card border border-white/10 shadow-2xl space-y-3 transition-all hover:border-white/20 overflow-hidden"
              >
                {/* Product Header & Price Badge */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    {product.badge && (
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[10px] font-bold uppercase tracking-wider mb-1">
                        {product.badge}
                      </span>
                    )}
                    <h3 className="text-sm font-bold text-white">{product.productName}</h3>
                    <p className="text-[11px] text-gray-400 line-clamp-1">{product.title}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-base font-extrabold text-cyan-300">{product.price}</span>
                    <div className="flex items-center text-[10px] text-amber-400 gap-0.5 mt-0.5">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>4.9 / 5.0</span>
                    </div>
                  </div>
                </div>

                {/* Embedded Video Player or Trigger */}
                {isPlaying ? (
                  <div className="relative w-full rounded-2xl overflow-hidden bg-black border border-white/10 aspect-video shadow-2xl">
                    <iframe
                      src={embedUrl}
                      title={product.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <button
                      onClick={() => setPlayingVideoId(null)}
                      className="absolute top-2 right-2 px-2.5 py-1 rounded-xl bg-black/80 text-gray-300 text-[10px] font-bold border border-white/10 uppercase tracking-wider"
                    >
                      Chiudi Video
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => setPlayingVideoId(product.id)}
                    className="relative w-full rounded-2xl bg-black/40 border border-white/5 p-6 flex flex-col items-center justify-center space-y-2 cursor-pointer group hover:border-[#00FFD1]/40 transition-all overflow-hidden"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#00FFD1]/20 text-cyan-300 border border-[#00FFD1]/40 flex items-center justify-center group-hover:scale-110 transition-transform shadow-neon">
                      <Plus className="w-6 h-6 stroke-[3] text-cyan-300 ml-0.5 rotate-45" />
                    </div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Riproduci Video Prodotto ({product.platform})</span>
                    <span className="text-[10px] text-gray-400">Clicca per l'anteprima integrata prima dell'acquisto</span>
                  </div>
                )}

                {/* Highlights List */}
                {product.highlights && product.highlights.length > 0 && (
                  <div className="p-3 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                      Vantaggi Principali:
                    </span>
                    <div className="space-y-1">
                      {product.highlights.map((h, i) => (
                        <div key={i} className="flex items-center space-x-2 text-[11px] text-gray-300 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* High Converting Call To Action Button */}
                <a
                  href={product.shopLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-neon text-black font-black text-xs flex items-center justify-center space-x-2 shadow-neon transition-all active:scale-95 group uppercase tracking-widest"
                >
                  <span>{product.conversionCta || 'Acquista Ora'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[3]" />
                </a>
              </div>
            );
          })
        )}
      </div>

      {/* Modal to add new store product video */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-card border border-white/10 rounded-3xl p-5 w-full max-w-sm space-y-3 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <ShoppingBag className="w-4 h-4 text-cyan-300" />
              Aggiungi Video Prodotto Negozio
            </h3>

            <form onSubmit={handleAddProduct} className="space-y-2.5">
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Nome Prodotto</label>
                <input
                  type="text"
                  placeholder="Es. Kit Guasha in Ossidiana"
                  value={productName}
                  onChange={e => setProductName(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs focus:outline-none focus:border-[#00FFD1]"
                  required
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Prezzo (€)</label>
                <input
                  type="text"
                  placeholder="Es. €24.90"
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs focus:outline-none focus:border-[#00FFD1]"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">URL Video TikTok / YouTube</label>
                <input
                  type="url"
                  placeholder="https://www.tiktok.com/video/..."
                  value={videoUrl}
                  onChange={e => setVideoUrl(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs focus:outline-none focus:border-[#00FFD1]"
                  required
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Link Diretto Negozio (CTA Link)</label>
                <input
                  type="url"
                  placeholder="https://tuonegozio.com/prodotto"
                  value={shopLink}
                  onChange={e => setShopLink(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs focus:outline-none focus:border-[#00FFD1]"
                  required
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Categoria</label>
                <select
                  value={category}
                  onChange={e => setCategory(e.target.value as any)}
                  className="w-full py-2.5 px-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs focus:outline-none focus:border-[#00FFD1]"
                >
                  <option value="skincare">Skincare</option>
                  <option value="posture">Postura</option>
                  <option value="mewing">Mewing & Mascella</option>
                  <option value="fitness">Fitness</option>
                  <option value="lifestyle">Lifestyle</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Vantaggi Principali (1 per riga)</label>
                <textarea
                  placeholder="Drenaggio linfatico&#10;Definizione mascella&#10;Spedizione gratuita"
                  value={highlightsInput}
                  onChange={e => setHighlightsInput(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs focus:outline-none focus:border-[#00FFD1] h-16"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Testo Bottone Conversione (CTA)</label>
                <input
                  type="text"
                  placeholder="Es. Acquista Ora - Sconto 20%"
                  value={conversionCta}
                  onChange={e => setConversionCta(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs focus:outline-none focus:border-[#00FFD1]"
                />
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-white/5 text-gray-300 font-bold text-xs hover:bg-white/10 uppercase tracking-wider transition-colors"
                >
                  Annulla
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-neon text-black font-extrabold text-xs uppercase tracking-wider shadow-neon transition-colors"
                >
                  Salva Prodotto
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

