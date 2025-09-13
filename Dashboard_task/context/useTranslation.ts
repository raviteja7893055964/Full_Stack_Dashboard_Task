import { useLang } from './LanguageContext';

export const useTranslation = () => {
  const { messages } = useLang();
  return messages;
};
