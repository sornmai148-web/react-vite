import { Clock } from "lucide-react";

import fallbackImage from "@/assets/news-fallback-image.webp";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

interface Props {
  id: number;
  parendId?: number;
  selftId?: number;
  src?: string;
  title: string;
  summary?: string;
  isRecommend?: boolean;
  type?: string;
  post_at: string;
}

export const RelatedNewsCard: React.FC<Props> = (props) => {
  const { t } = useTranslation("translation");

  return (
    <Link
      from="/detail/$newId"
      to="."
      params={{ newId: `${props?.id}` }}
      search={{ parentId: props?.parendId, id: props?.selftId }}
      className="relative group cursor-pointer overflow-hidden"
    >
      <div className="relative overflow-hidden duration-300 group-hover:scale-110 aspect-video">
        <img
          src={props?.src ?? fallbackImage}
          alt={props?.title ?? ""}
          className="absolute inset-0 w-full h-full object-contain transition-opacity opacity-0"
          onLoad={(e) => (e.currentTarget.style.opacity = "1")}
        />
      </div>

      <div className="bg-linear-to-b flex flex-col justify-between from-transparent to-black/60 absolute right-0 left-0 top-0 bottom-0">
        <div className="flex items-center text-gray-100 space-x-1.5 p-3.5 bg-linear-to-b from-black/60 to-transparent">
          <Clock className="size-4 text-amber-400" />
          <span className="text-xs mt-0.5">{props?.post_at}</span>
        </div>

        <div className="h-fit p-3.5 flex flex-col space-y-1">
          <div className="flex items-center space-x-1.5">
            {props?.type && (
              <p className="text-[10px] bg-amber-500/30 w-fit text-white px-2 py-0.5 rounded-xs">
                {props?.type}
              </p>
            )}
            {props?.isRecommend && <div className="h-4 w-px bg-white" />}
            {props?.isRecommend && (
              <span className="text-[10px] text-amber-400 font-medium">
                {t("common.recommended-label")}
              </span>
            )}
          </div>
          <h4 className="font-bold text-white group-hover:text-amber-500 transition-colors duration-300 wrap-break-word! line-clamp-1">
            {props?.title}
          </h4>
          {props?.summary && (
            <p className="text-xs text-gray-100 wrap-break-word! line-clamp-1">
              {props?.summary}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};
