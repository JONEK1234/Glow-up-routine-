import React, { useState } from 'react';
import { MediaLink } from '../types';
import { processMediaLink } from '../utils/uploadPipeline';
import { ExternalLink, Play, Video, Film, Image as ImageIcon, Copy, Check } from 'lucide-react';

interface MediaLinkEmbedProps {
  media: MediaLink;
  onDelete?: (id: string) => void;
}

export const MediaLinkEmbed: React.FC<MediaLinkEmbedProps> = ({ media, onDelete }) => {
  const [showEmbed, setShowEmbed] = useState(false);
  const [copied, setCopied] = useState(false);

  const processed = processMediaLink(media.url);
  const embedUrl = media.embedUrl || processed.embedUrl;
  const platform = media.platform || processed.platform;

  const handleCopy = () => {
    navigator.clipboard.writeText(media.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getPlatformIcon = () => {
    switch (platform) {
      case 'tiktok':
        return <Video className="w-4 h-4 text-rose-400" />;
      case 'youtube':
        return <Film className="w-4 h-4 text-red-500" />;
      case 'image':
        return <ImageIcon className="w-4 h-4 text-cyan-300" />;
      default:
        return <ExternalLink className="w-4 h-4 text-cyan-300" />;
    }
  };

  return (
    <div className="rounded-2xl glass-card p-3.5 space-y-2.5 shadow-lg overflow-hidden transition-all hover:border-[#00FFD1]/30">
      {/* Title & Platform Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-xl bg-white/5 border border-white/10">
            {getPlatformIcon()}
          </div>
          <div>
            <h4 className="text-xs font-bold text-white line-clamp-1">{media.title}</h4>
            <div className="flex items-center space-x-2 text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
              <span className="text-cyan-300">{platform}</span>
              <span>•</span>
              <span>{media.category}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-1 shrink-0">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            title="Copia link"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-cyan-300" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
          <a
            href={media.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-cyan-300 transition-colors"
            title="Apri link esterno"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {media.description && (
        <p className="text-[11px] text-gray-300 line-clamp-2 leading-relaxed bg-black/40 p-2.5 rounded-xl border border-white/5">
          {media.description}
        </p>
      )}

      {/* Embed Container or Trigger */}
      {showEmbed ? (
        <div className="relative w-full rounded-2xl overflow-hidden bg-black border border-white/10 aspect-video">
          {platform === 'image' ? (
            <img
              src={embedUrl}
              alt={media.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <iframe
              src={embedUrl}
              title={media.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
          <button
            onClick={() => setShowEmbed(false)}
            className="absolute top-2 right-2 px-2.5 py-1 rounded-xl bg-black/80 text-gray-300 text-[10px] font-bold hover:text-white border border-white/10 uppercase tracking-wider"
          >
            Chiudi Player
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowEmbed(true)}
          className="w-full py-2.5 px-3 rounded-xl bg-white/5 hover:bg-[#00FFD1]/10 border border-white/10 hover:border-[#00FFD1]/40 text-xs font-bold text-gray-200 hover:text-cyan-300 flex items-center justify-center space-x-2 transition-all shadow-sm group"
        >
          <Play className="w-3.5 h-3.5 text-cyan-300 fill-cyan-300 group-hover:scale-110 transition-transform" />
          <span className="uppercase tracking-wider text-[11px]">Mostra Anteprima Media Integrato</span>
        </button>
      )}
    </div>
  );
};

