import React, {createContext, useContext, useState} from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};

export const LanguageProvider = ({children}) => {
    const [currentLanguage, setCurrentLanguage] = useState('en');

    const changeLanguage = (language) => {
        setCurrentLanguage(language);
    };

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
