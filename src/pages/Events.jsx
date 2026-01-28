import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import upcomingEvents from '../data/upcomingEvents.json';
import regularCelebrations from '../data/regularCelebrations.json';

const Events = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent">
          {t('events.page_title')}
        </h2>
        <p className="text-center text-gray-600 mb-16 font-sans text-lg">
          {t('events.page_subtitle')}
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => (
            <div 
              key={event.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">{event.name[currentLanguage]}</h3>
                </div>
                <p className="text-orange-100 font-sans">{event.date[currentLanguage]}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 font-sans leading-relaxed">{event.description[currentLanguage]}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-10 border-t-4 border-orange-600 shadow-xl">
          <h3 className="text-3xl font-bold mb-6 text-gray-800">{t('events.regular_celebrations')}</h3>
          <div className="grid md:grid-cols-2 gap-6 font-sans">
            {regularCelebrations.map((celebration, index) => (
              <div key={celebration.id} className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-800">{celebration.name[currentLanguage]}</p>
                  <p className="text-gray-600">{celebration.description[currentLanguage]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
