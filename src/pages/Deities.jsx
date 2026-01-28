import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import deitiesData from '../data/deities.json';

const Deities = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent">
          {t('deities.page_title')}
        </h2>
        <p className="text-center text-gray-600 mb-16 font-sans text-lg max-w-2xl mx-auto">
          {t('deities.page_subtitle')}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deitiesData.map((deity, index) => (
            <div 
              key={deity.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-orange-600"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-3 bg-gradient-to-r ${deity.color}`}></div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 leading-tight">{deity.name[currentLanguage]}</h3>
                  <Star className="w-6 h-6 text-orange-500 flex-shrink-0" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-4 py-1 rounded-full text-sm font-sans font-semibold">
                    {deity.significance[currentLanguage]}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed font-sans">
                  {deity.description[currentLanguage]}
                </p>
                
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border-l-4 border-orange-600">
                  <p className="text-sm text-gray-500 mb-1 font-sans">{t('deities.sacred_mantra')}</p>
                  <p className="text-xl font-bold text-orange-800">{deity.mantra}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deities;
