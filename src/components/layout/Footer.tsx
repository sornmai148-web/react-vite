import { siteConfig } from "@/config/site";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation("translation");
  const year = new Date().getFullYear();

  return (
    <div className="w-full bg-primary/95">
      <div className="lg:max-w-5xl xl:max-w-6xl flex justify-center text-primary py-2.5 sm:py-6 space-y-2.5 flex-col items-center mx-auto">
        <p className="font-bold text-white sm:text-2xl">
          {siteConfig.siteName}
        </p>
        <div className="w-5/6 h-px bg-linear-to-r from-transparent via-secondary to-transparent" />
        <p className="text-sm sm:text-lg md:text-xl text-gray-400 font-medium">
          {t("common.coptyright", { year })}
        </p>
      </div>
    </div>
  );
};
