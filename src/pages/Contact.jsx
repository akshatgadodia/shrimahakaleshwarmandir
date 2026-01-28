import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent">
          {t('contact.page_title')}
        </h2>
        <p className="text-center text-gray-600 mb-16 font-sans text-lg">
          {t('contact.page_subtitle')}
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-xl p-10 border-t-4 border-orange-600">
            <h3 className="text-3xl font-bold mb-8 text-gray-800">{t('contact.get_in_touch')}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">{t('contact.address_label')}</p>
                  <p className="text-gray-600 font-sans whitespace-pre-line">
                    {t('contact.address_text')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">{t('contact.phone_label')}</p>
                  <p className="text-gray-600 font-sans">{t('contact.phone_text')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">{t('contact.hours_label')}</p>
                  <p className="text-gray-600 font-sans">
                    {t('contact.hours_morning')}<br />
                    {t('contact.hours_evening')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <a 
                href="https://www.google.com/search?q=Shri+Mahakaleshwar+Mandir"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 font-sans w-full justify-center"
              >
                <MapPin className="w-5 h-5" />
                {t('contact.view_on_maps')}
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl p-10 border-t-4 border-red-600">
            <h3 className="text-3xl font-bold mb-8 text-gray-800">{t('contact.send_message')}</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-sans font-semibold mb-2">{t('contact.name_label')}</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-600 focus:outline-none transition-colors font-sans"
                  placeholder={t('contact.name_placeholder')}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-sans font-semibold mb-2">{t('contact.email_label')}</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-600 focus:outline-none transition-colors font-sans"
                  placeholder={t('contact.email_placeholder')}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-sans font-semibold mb-2">{t('contact.phone_label_form')}</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-600 focus:outline-none transition-colors font-sans"
                  placeholder={t('contact.phone_placeholder')}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-sans font-semibold mb-2">{t('contact.message_label')}</label>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-600 focus:outline-none transition-colors font-sans resize-none"
                  placeholder={t('contact.message_placeholder')}
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 font-sans font-semibold"
              >
                {t('contact.send_btn')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
