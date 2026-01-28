import React from 'react';
import { useTranslation } from 'react-i18next';
import { Camera } from 'lucide-react';

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent">
          {t('gallery.page_title')}
        </h2>
        <p className="text-center text-gray-600 mb-16 font-sans text-lg">
          {t('gallery.page_subtitle')}
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div 
              key={item}
              className="relative aspect-square bg-gradient-to-br from-orange-200 to-red-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:scale-105 group"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera className="w-16 h-16 text-white/50 group-hover:scale-110 transition-transform" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white font-sans">{t('gallery.temple_view')} {item}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 font-sans mb-6">
            {t('gallery.visit_maps')}
          </p>
          <a 
            href="https://www.google.com/search?q=Shri+Mahakaleshwar+Mandir"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 font-sans"
          >
            <Camera className="w-5 h-5" />
            {t('gallery.view_on_maps')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
