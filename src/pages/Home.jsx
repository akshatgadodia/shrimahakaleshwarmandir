import React from 'react';
import { useTranslation } from 'react-i18next';
import { Flame, MapPin, Clock, Heart, Calendar } from 'lucide-react';
import WhatsAppSection from '../components/WhatsAppSection';

const Home = ({ setActiveSection }) => {
  const { t } = useTranslation();

  return (
    <>
      <section className="pt-32 pb-20 px-4">        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <div className="inline-block mb-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-500 via-red-600 to-orange-700 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <Flame className="w-14 h-14 text-white" />
              </div>
            </div>
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-700 via-red-700 to-orange-700 bg-clip-text text-transparent leading-tight">
              {t('home.welcome_mantra')}
            </h2>
            <p className="text-2xl text-gray-700 mb-4 font-light">
              {t('home.welcome_title')}
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-sans">
              {t('home.welcome_description')}
            </p>
            
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setActiveSection('timings')}
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2 font-sans"
              >
                <Clock className="w-5 h-5" />
                {t('home.visit_timings_btn')}
              </button>
              <button 
                onClick={() => setActiveSection('events')}
                className="bg-white text-orange-700 border-2 border-orange-600 px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2 font-sans"
              >
                <Calendar className="w-5 h-5" />
                {t('home.upcoming_events_btn')}
              </button>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-t-4 border-orange-600 hover:shadow-2xl transition-all hover:-translate-y-1">
              <MapPin className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">{t('home.location_title')}</h3>
              <p className="text-gray-600 font-sans whitespace-pre-line">
                {t('home.location_text')}
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-t-4 border-red-600 hover:shadow-2xl transition-all hover:-translate-y-1">
              <Clock className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">{t('home.darshan_timings_title')}</h3>
              <p className="text-gray-600 font-sans">
                {t('home.darshan_morning')}<br />
                {t('home.darshan_evening')}
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-t-4 border-orange-600 hover:shadow-2xl transition-all hover:-translate-y-1">
              <Heart className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">{t('home.daily_aarti_title')}</h3>
              <p className="text-gray-600 font-sans">
                {t('home.aarti_morning')}<br />
                {t('home.aarti_evening')}
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* WhatsApp Section */}
      <WhatsAppSection />
    </>
  );
};

export default Home;
