import React, {createContext, useContext, useEffect, useState} from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};

export const LanguageProvider = ({children}) => {
    const storedLanguage = localStorage.getItem('currentLanguage');
    const [currentLanguage, setCurrentLanguage] = useState(storedLanguage || 'en');

    const changeLanguage = (language) => {
        setCurrentLanguage(language);
        localStorage.setItem('currentLanguage', language);
    };

    useEffect(() => {
        localStorage.setItem('currentLanguage', currentLanguage);
    }, [currentLanguage]);

    const value = {
        currentLanguage,
        changeLanguage,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};