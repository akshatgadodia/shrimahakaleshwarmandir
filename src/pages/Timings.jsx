import React from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, Heart, ChevronRight } from 'lucide-react';

const Timings = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent">
          {t('timings.page_title')}
        </h2>
        <p className="text-center text-gray-600 mb-16 font-sans text-lg">
          {t('timings.page_subtitle')}
        </p>
        
        <div className="space-y-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-l-4 border-orange-600 hover:shadow-2xl transition-all">
            <div className="flex items-center gap-4 mb-4">
              <Clock className="w-8 h-8 text-orange-600" />
              <h3 className="text-2xl font-bold text-gray-800">{t('timings.everyday')}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6">
                <p className="text-sm text-gray-500 mb-2 font-sans">{t('timings.morning')}</p>
                <p className="text-2xl font-bold text-orange-800">{t('timings.morning_time')}</p>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6">
                <p className="text-sm text-gray-500 mb-2 font-sans">{t('timings.evening')}</p>
                <p className="text-2xl font-bold text-orange-800">{t('timings.evening_time')}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-l-4 border-orange-600 hover:shadow-2xl transition-all">
            <div className="flex items-center gap-4 mb-4">
              <Clock className="w-8 h-8 text-orange-600" />
              <h3 className="text-2xl font-bold text-gray-800">{t('timings.aarti_timings')}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6">
                <p className="text-sm text-gray-500 mb-2 font-sans">{t('timings.morning')}</p>
                <p className="text-2xl font-bold text-orange-800">{t('timings.aarti_morning')}</p>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6">
                <p className="text-sm text-gray-500 mb-2 font-sans">{t('timings.evening')}</p>
                <p className="text-2xl font-bold text-orange-800">{t('timings.aarti_evening')}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <Heart className="w-7 h-7" />
            {t('timings.important_info')}
          </h3>
          <ul className="space-y-3 font-sans">
            <li className="flex items-start gap-3">
              <ChevronRight className="w-5 h-5 mt-1 flex-shrink-0" />
              <span>{t('timings.info1')}</span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="w-5 h-5 mt-1 flex-shrink-0" />
              <span>{t('timings.info2')}</span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="w-5 h-5 mt-1 flex-shrink-0" />
              <span>{t('timings.info3')}</span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="w-5 h-5 mt-1 flex-shrink-0" />
              <span>{t('timings.info4')}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Timings;
