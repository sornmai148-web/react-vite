import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>
        {t("welcome")} : {i18n.language}
      </h1>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("km")}>Khmer</button>
      <button onClick={() => changeLanguage("zhcn")}>Chinese</button>
    </div>
  );
};
