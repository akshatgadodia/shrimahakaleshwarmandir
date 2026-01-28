import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import committeeData from '../data/committee.json';

const Committee = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent">
          {t('committee.page_title')}
        </h2>
        <p className="text-center text-gray-600 mb-16 font-sans text-lg">
          {t('committee.page_subtitle')}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {committeeData.map((member, index) => (
            <div 
              key={member.id}
              className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all hover:-translate-y-1 border-t-4 border-red-600"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name[currentLanguage]} className="w-full h-full object-cover" />
                  ) : (
                    <Users className="w-10 h-10 text-white" />
                  )}
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{member.name[currentLanguage]}</h4>
                <p className="text-red-600 font-sans font-semibold text-sm mb-4">{member.designation[currentLanguage]}</p>
                
                {member.mobile && (
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <Phone className="w-4 h-4 text-red-600" />
                    <span className="text-gray-700 font-sans text-sm">{member.mobile}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Committee;