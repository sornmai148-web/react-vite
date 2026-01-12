/* eslint-disable no-unsafe-optional-chaining */
import { cn } from "@/lib/utils";

import type { IFilterOption } from "@/api/interface";
import { useQueryParams } from "@/modules/shared/hooks/useQueryParams";
import { useFilterMedata } from "@/modules/shared/hooks/useFilterMedata";
import { useTranslation } from "react-i18next";

const className =
  "shrink-0 px-3.5 bg-gray-100 cursor-pointer font-medium py-1.5 rounded-xs text-sm";

interface Props {
  filterOptions: Array<IFilterOption>;
}

export const HorizontalScrollFilter: React.FC<Props> = ({ filterOptions }) => {
  const { parentId, selfId, updateParentId, updateSelfId, clearAll } =
    useQueryParams();
  const { setData: setMetadata } = useFilterMedata();

  //   const t = useTranslations("common");
  const { t } = useTranslation("translation");

  const items = [
    { id: -1, label: t("common.news-label"), value: t("common.news-label") },
    ...(filterOptions || [])?.map((opt) => ({
      id: opt?.id,
      label: opt?.name,
      value: opt?.id,
    })),
  ];

  return (
    <div className="flex space-x-1.5 items-center">
      {(items || [])?.map((x, i) => (
        <button
          key={i}
          id={`${x?.id}-${x?.label}`} //-- Used for scroll to element animation, 滚动到目标元素动画使用
          className={cn(className, {
            "bg-amber-500 text-white":
              x?.id == +selfId ||
              +parentId == x?.id ||
              (x?.id == -1 && !selfId && !parentId),
          })}
          onClick={() => {
            if (x?.id == -1) {
              clearAll();
              const el = document.getElementById(`${x?.id}-${x?.label}`);
              if (el) el.scrollIntoView({ behavior: "smooth" });
              window?.scrollTo({ top: 0, behavior: "smooth" });
              setMetadata([]);
              return;
            }

            updateParentId("");
            updateSelfId(x?.id);
            const el = document.getElementById(`${x?.id}-${x?.label}`);
            if (el) el.scrollIntoView({ behavior: "smooth" });
            window?.scrollTo({ top: 0, behavior: "smooth" });
            setMetadata([x?.label]);
          }}
        >
          {x.label}
        </button>
      ))}
    </div>
  );
};
