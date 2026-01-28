import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// import { changeLanguage } from '../i18n/config';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem('temple-language') || 'hi'
  );

  useEffect(() => {
    // Ensure i18n is synced with state
    i18n.changeLanguage(currentLanguage)
    localStorage.setItem('temple-language', currentLanguage)
  }, [currentLanguage, i18n]);

  const switchLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  const value = {
    currentLanguage,
    switchLanguage,
    availableLanguages: [
      { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
      { code: 'en', name: 'English', nativeName: 'English' },
    ]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
