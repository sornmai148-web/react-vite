import i18n from "@/i18n";

function localeMapper(locale: string) {
  switch (locale) {
    case "en-us":
      return "en";
    default:
      return locale;
  }
}

export function getCurrentLocale() {
  const currentLocale = i18n.language.toLowerCase();
  return {
    currentLocale,
    convertedLocale: localeMapper(currentLocale),
  };
}
