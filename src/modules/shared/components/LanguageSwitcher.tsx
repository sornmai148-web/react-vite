"use client";

import { ChevronDown, Globe } from "lucide-react";

import ReactCountryFlag from "react-country-flag";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useTranslation } from "react-i18next";
import { getCurrentLocale } from "@/utils/getCurrentLocale";

const locales = [
  {
    code: "en-us",
    label: "English",
    countryCode: "gb",
    flag: (
      <ReactCountryFlag
        aria-label="English"
        className="text-2xl!"
        countryCode="gb"
      />
    ),
  },
  {
    code: "zh-cn",
    label: "中文 (简体)",
    countryCode: "cn",
    flag: (
      <ReactCountryFlag
        aria-label="中文 (简体)"
        className="text-2xl!"
        countryCode="cn"
      />
    ),
  },
  {
    code: "km",
    label: "ភាសាខ្មែរ",
    countryCode: "kh",
    flag: (
      <ReactCountryFlag
        aria-label="ភាសាខ្មែរ"
        className="text-2xl!"
        countryCode="kh"
      />
    ),
  },
  {
    code: "th",
    label: "ภาษาไทย",
    countryCode: "th",
    flag: (
      <ReactCountryFlag
        aria-label="ภาษาไทย"
        className="text-2xl!"
        countryCode="th"
      />
    ),
  },
  {
    code: "ms",
    label: "Bahasa Melayu",
    countryCode: "my",
    flag: (
      <ReactCountryFlag
        aria-label="Bahasa Melayu"
        className="text-2xl!"
        countryCode="my"
      />
    ),
  },
];

export const LocaleSwitcher = () => {
  const [countryCode, setCountryCode] = useState("");

  const { t, i18n } = useTranslation("translation");
  const { currentLocale } = getCurrentLocale();

  const handleChange = (locale: string) => {
    i18n.changeLanguage(locale);
  };

  const language = locales.find((x) => x.code == currentLocale);
  const defaultCountrycode = locales.find((c) => c.code == currentLocale);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center space-x-2">
          <ReactCountryFlag
            className="text-3xl! max-md:hidden!"
            countryCode={
              countryCode || (defaultCountrycode?.countryCode as never)
            }
          />
          <span className="text-xs font-bold text-white">
            {language?.label}
          </span>

          <button className="md:hidden p-2 mr-0! cursor-pointer rounded-md bg-white/10">
            <Globe className="size-4 text-amber-500" />
          </button>

          <button className="max-md:hidden cursor-pointer p-0.5 mt-1 mr-2">
            <ChevronDown className="size-5 text-white" />
          </button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-fit rounded-xs mt-1 xl:mt-3 shadow-none border border-gray-100"
        align="end"
      >
        <DropdownMenuLabel>{t("common.choose-language")}</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-100" />
        <DropdownMenuRadioGroup
          value={currentLocale}
          onValueChange={(value) => {
            handleChange(value);
          }}
        >
          {locales.map((x, i) => (
            <DropdownMenuRadioItem
              key={i}
              value={x.code}
              className="cursor-pointer"
              onClick={() => setCountryCode(x.countryCode)}
            >
              <div className="flex items-center space-x-2.5">
                <span>{x.flag}</span>
                <span>{x.label}</span>
              </div>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
