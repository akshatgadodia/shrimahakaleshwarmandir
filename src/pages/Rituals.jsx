import React from 'react';
import { useTranslation } from 'react-i18next';
import { Flame, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ritualsData from '../data/rituals.json';

const Rituals = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent">
          {t('rituals.page_title')}
        </h2>
        <p className="text-center text-gray-600 mb-16 font-sans text-lg">
          {t('rituals.page_subtitle')}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ritualsData.map((ritual, index) => (
            <div 
              key={ritual.id}
              className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:-translate-y-1 border-t-4 border-orange-600"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 leading-tight">{ritual.name[currentLanguage]}</h3>
                  <p className="text-sm text-orange-600 font-sans">{ritual.time[currentLanguage]}</p>
                </div>
              </div>
              <p className="text-gray-600 font-sans leading-relaxed">{ritual.description[currentLanguage]}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-10 text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <BookOpen className="w-8 h-8" />
            {t('rituals.book_puja_title')}
          </h3>
          <p className="text-lg mb-6 text-orange-100 font-sans">
            {t('rituals.book_puja_desc')}
          </p>
          <button className="bg-white text-orange-700 px-8 py-4 rounded-lg font-sans font-semibold hover:shadow-xl transition-all hover:scale-105">
            {t('rituals.contact_office_btn')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Rituals;
