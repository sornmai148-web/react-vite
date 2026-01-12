import { ListFilter } from "lucide-react";
import { CollapseOption } from "./collapseOption";
import { useQueryParams } from "@/modules/shared/hooks/useQueryParams";
import { useTranslation } from "react-i18next";
import type { IFilterOption } from "@/api/interface";
import { SearchBar } from "../SearchBar";

interface Props {
  filterOptions: Array<IFilterOption>;
}

export const DesktopFilter: React.FC<Props> = ({ filterOptions }) => {
  const { t } = useTranslation("translation");
  const { clearAll } = useQueryParams();

  return (
    <div className="sticky top-24">
      <div className="bg-white rounded-xs p-3 h-fit">
        <p className="text-sm font-bold px-1">{t("common.search-label")}</p>
        <SearchBar />
      </div>

      <div className="bg-white rounded-xs px-4 py-5 h-fit mt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm font-bold px-1">
            <ListFilter className="size-5 text-amber-500" />
            <span className="text-pretty/80">{t("common.filter-label")}</span>
          </div>

          <button
            onClick={() => {
              if (typeof window != "undefined") {
                clearAll();
                window?.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="cursor-pointer text-sm text-gray-600 hover:text-amber-500 duration-300 transition-colors"
          >
            {t("common.clear-filter")}
          </button>
        </div>

        <div className="w-full h-px bg-gray-100 mt-3" />

        <CollapseOption items={filterOptions} />
      </div>
    </div>
  );
};
