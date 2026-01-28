import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent">
          {t('about.page_title')}
        </h2>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border-t-4 border-orange-600">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6 font-sans text-lg">
              {t('about.paragraph1')}
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6 font-sans text-lg">
              {t('about.paragraph2')}
            </p>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 my-8 border-l-4 border-orange-600">
              <h3 className="text-2xl font-bold mb-4 text-orange-800">{t('about.mission_title')}</h3>
              <ul className="space-y-3 text-gray-700 font-sans">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <span>{t('about.mission1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <span>{t('about.mission2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <span>{t('about.mission3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <span>{t('about.mission4')}</span>
                </li>
              </ul>
            </div>
            
            <p className="text-gray-700 leading-relaxed font-sans text-lg">
              {t('about.paragraph3')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
