import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'nl' ? 'en' : 'nl';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-medium text-sm uppercase tracking-wider"
      aria-label="Toggle language"
    >
      <Globe size={16} />
      <span>{i18n.language === 'nl' ? 'EN' : 'NL'}</span>
    </button>
  );
};

export default LanguageSwitcher;
