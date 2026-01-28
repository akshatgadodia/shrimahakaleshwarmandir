import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Crown, Phone, MapPin, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import trusteesData from '../data/trustees.json';

const Trustees = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const filteredTrustees = useMemo(() => {
    return trusteesData.filter(trustee =>
      trustee.name[currentLanguage].toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [trusteesData, searchTerm, currentLanguage]);

  const totalPages = Math.ceil(filteredTrustees.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTrustees = filteredTrustees.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent">
          {t('trustees.page_title')}
        </h2>
        <p className="text-center text-gray-600 mb-12 font-sans text-lg">
          {t('trustees.page_subtitle')}
        </p>
        
        {/* Search Bar */}
        <div className="mb-8 mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={currentLanguage === 'hi' ? 'न्यासी खोजें...' : 'Search trustees...'}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-600 focus:outline-none font-sans"
            />
          </div>
        </div>
        
        {/* Trustees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentTrustees.map((trustee, index) => (
            <div 
              key={trustee.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-orange-600"
            >
              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    {trustee.photo ? (
                      <img src={trustee.photo} alt={trustee.name[currentLanguage]} className="w-full h-full object-cover" />
                    ) : (
                      <Crown className="w-10 h-10 text-white" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-4">{trustee.name[currentLanguage]}</h3>
                </div>
                
                <div className="space-y-3">
                  {trustee.mobile && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700 font-sans text-sm">{trustee.mobile}</span>
                    </div>
                  )}
                  
                  {trustee.address && trustee.address[currentLanguage] && (
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 font-sans text-xs leading-relaxed">{trustee.address[currentLanguage]}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-lg font-sans ${
                  currentPage === page
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
                    : 'border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Trustees;