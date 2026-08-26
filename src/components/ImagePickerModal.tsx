import React, { useState } from 'react';
import { X, Image as ImageIcon, Link, Upload, Check, Search, Sparkles } from 'lucide-react';

interface ImagePickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectImage: (imageUrl: string) => void;
  currentUrl?: string;
  isDark?: boolean;
}

export const ImagePickerModal: React.FC<ImagePickerModalProps> = ({
  isOpen,
  onClose,
  onSelectImage,
  currentUrl,
  isDark = false
}) => {
  const [activeTab, setActiveTab] = useState<'gallery' | 'url' | 'upload'>('gallery');
  const [customUrl, setCustomUrl] = useState(currentUrl || '');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const curatedPhotos = [
    {
      url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      title: 'Abstract Gradient Flow'
    },
    {
      url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
      title: 'Neon Cyber Geometry'
    },
    {
      url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      title: 'Retrofuturism Tech'
    },
    {
      url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80',
      title: 'Minimalist Architecture'
    },
    {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      title: 'Analytics Workspace'
    },
    {
      url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
      title: 'Mobile App Device Mockup'
    },
    {
      url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80',
      title: 'Color Mesh Gradient'
    },
    {
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      title: 'Creative Team Startup'
    }
  ];

  const filteredPhotos = searchQuery
    ? curatedPhotos.filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : curatedPhotos;

  const handleSelect = (url: string) => {
    onSelectImage(url);
    onClose();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          handleSelect(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div
        className={`border rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] transition-all ${
          isDark
            ? 'bg-[#12121A] border-white/10 text-white'
            : 'bg-white border-[#E5E7EB] text-[#0F172A]'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-inherit flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 flex items-center justify-center shadow-[0_0_12px_rgba(0,229,255,0.2)]">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight">Biblioteca de Imágenes HD</h3>
              <p className="text-xs text-[#64748B] dark:text-neutral-400">Selecciona o sube recursos visuales en alta resolución</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#64748B] hover:text-[#0F172A] dark:hover:text-white rounded-lg hover:bg-[#F0F0F3] dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="px-6 pt-4 pb-3 border-b border-inherit flex gap-2 shrink-0 bg-[#FAFAFC] dark:bg-white/[0.02]">
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'gallery'
                ? 'bg-[#0F172A] text-white shadow-xs dark:bg-white dark:text-[#0F172A]'
                : 'bg-white dark:bg-white/5 text-[#64748B] dark:text-neutral-400 border border-[#E5E7EB] dark:border-transparent hover:text-[#0F172A] dark:hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Galería Curada
          </button>
          <button
            onClick={() => setActiveTab('url')}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'url'
                ? 'bg-[#0F172A] text-white shadow-xs dark:bg-white dark:text-[#0F172A]'
                : 'bg-white dark:bg-white/5 text-[#64748B] dark:text-neutral-400 border border-[#E5E7EB] dark:border-transparent hover:text-[#0F172A] dark:hover:text-white'
            }`}
          >
            <Link className="w-3.5 h-3.5" />
            Enlace Web / CDN
          </button>
          <button
            onClick={() => setActiveTab('upload')}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'upload'
                ? 'bg-[#0F172A] text-white shadow-xs dark:bg-white dark:text-[#0F172A]'
                : 'bg-white dark:bg-white/5 text-[#64748B] dark:text-neutral-400 border border-[#E5E7EB] dark:border-transparent hover:text-[#0F172A] dark:hover:text-white'
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            Subir Archivo
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 bg-[#FAFAFC] dark:bg-transparent">
          {activeTab === 'gallery' && (
            <div className="space-y-4">
              <div className="relative">
                <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filtrar por estilo o temática..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 rounded-lg text-xs border focus:outline-none focus:border-[#00E5FF] ${
                    isDark
                      ? 'bg-[#181824] border-white/10 text-white'
                      : 'bg-white border-[#E5E7EB] text-[#0F172A]'
                  }`}
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {filteredPhotos.map((photo, i) => (
                  <div
                    key={i}
                    onClick={() => handleSelect(photo.url)}
                    className="group relative rounded-xl overflow-hidden border border-[#E5E7EB] dark:border-white/10 aspect-video cursor-pointer hover:border-[#00E5FF] transition-all hover:scale-[1.02] shadow-xs hover:shadow-md"
                  >
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2 flex flex-col justify-end">
                      <span className="text-[10px] text-white font-bold leading-tight truncate">{photo.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'url' && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-[#0F172A] dark:text-neutral-300 block mb-1.5">
                  Enlace Directo de Imagen (HTTPS):
                </label>
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/photo-..."
                  value={customUrl}
                  onChange={(e) => setCustomUrl(e.target.value)}
                  className={`w-full p-2.5 rounded-lg text-xs border focus:outline-none focus:border-[#00E5FF] font-mono ${
                    isDark
                      ? 'bg-[#181824] border-white/10 text-white'
                      : 'bg-white border-[#E5E7EB] text-[#0F172A]'
                  }`}
                />
              </div>

              {customUrl && (
                <div className="rounded-xl overflow-hidden border border-[#E5E7EB] dark:border-white/10 aspect-video max-h-48">
                  <img src={customUrl} alt="Vista previa" className="w-full h-full object-cover" />
                </div>
              )}

              <button
                onClick={() => handleSelect(customUrl)}
                disabled={!customUrl}
                className="w-full bg-[#0F172A] hover:bg-[#1E293B] dark:bg-[#00E5FF] dark:hover:bg-[#00cce6] dark:text-black text-white py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs disabled:opacity-40 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                Aplicar Imagen
              </button>
            </div>
          )}

          {activeTab === 'upload' && (
            <div className="space-y-4">
              <label className="border-2 border-dashed border-[#D1D5DB] dark:border-white/10 hover:border-[#00E5FF] rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:bg-white dark:hover:bg-white/5 bg-white/50">
                <Upload className="w-8 h-8 text-[#00E5FF] mb-2" />
                <span className="text-xs font-bold text-[#0F172A] dark:text-white">Haz clic o arrastra un archivo</span>
                <span className="text-[11px] text-[#64748B] dark:text-neutral-400 mt-1">PNG, JPG, WebP o SVG (máx. 5MB)</span>
                <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
