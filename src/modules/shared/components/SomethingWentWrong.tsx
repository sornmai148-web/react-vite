import SthWrongImg from "@/assets/something-wrong.webp";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const SomethingWentWrong = () => {
  const { t } = useTranslation("translation");

  return (
    <div className="flex h-[85dvh] items-center justify-center flex-col space-y-2.5 sm:space-y-3.5">
      <img
        src={SthWrongImg}
        accessKey="new-logo"
        alt="news-logo.png"
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-contain size-28 sm:size-32 xl:size-44"
      />

      <div className="flex items-center justify-center flex-col">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 text-center">
          {t("components.something-wrong.title")}
        </h2>
        <p className="text-sm md:text-base xl:text-lg text-gray-500 text-center">
          {t("components.something-wrong.sub-title")}
        </p>
        <Link
          to="/"
          replace
          className="text-sm md:text-base py-2 px-4 bg-amber-500 text-white rounded-xs"
        >
          {t("components.something-wrong.btn")}
        </Link>
      </div>
    </div>
  );
};
