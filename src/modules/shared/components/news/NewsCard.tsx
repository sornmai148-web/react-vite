import { cn } from "@/lib/utils";
import { Clock, Film, Video } from "lucide-react";
import fallbackImage from "@/assets/news-fallback-image.webp";

import type { INewsData } from "@/api/interface";
import { getCurrentLocale } from "@/utils/getCurrentLocale";
import { getFormatHumanReadable } from "@/config/dayJs";
import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { ReactImage } from "../ReactImage";

const ReactPlayer = lazy(() => import("react-player"));

interface Props extends INewsData {
  onClick: () => void;
}

export const NewsCard: React.FC<Props> = (props) => {
  const { convertedLocale: locale } = getCurrentLocale();
  const { t } = useTranslation("translation");

  if (!props.title && !props.summary) return null;

  if (!props?.media?.length)
    return (
      <div
        onClick={props?.onClick}
        className="cursor-pointer! hover:-translate-y-0.5 transition-transform duration-500 bg-white p-3 sm:p-4 lg:p-5 mb-2 rounded-xs!"
      >
        <div className="relative flex flex-col overflow-hidden">
          <div className="basis-3/5 flex flex-col space-y-1">
            <div className="flex flex-col mt-2 space-y-0.5">
              <div className="flex items-center justify-between pb-1.5">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2">
                    {props?.post_at && (
                      <div className="flex items-center space-x-1.5 text-[9px] text-black backdrop-blur-sm lg:text-xs w-fit">
                        <Clock className="max-sm:size-3.5 size-5 text-amber-400" />
                        <span className="text-gray-500">
                          {getFormatHumanReadable(
                            new Date(props?.post_at as string),
                            locale as never
                          )}
                        </span>
                      </div>
                    )}

                    {!!props?.is_recommended && (
                      <div className="size-2 bg-amber-400 rounded-full" />
                    )}

                    {!!props?.is_recommended && (
                      <span className="max-sm:text-[11px] text-sm text-amber-400 px-3 py-0.5 bg-amber-400/5">
                        {t("common.recommended-label")}
                      </span>
                    )}
                  </div>
                </div>

                {props?.tags && (
                  <p className="flex items-center space-x-1 text-xs lg:text-sm mt-2 text-amber-500">
                    {(props?.tags || []).map((t, i) => (
                      <span key={i}>#{t}</span>
                    ))}
                  </p>
                )}
              </div>

              <h4 className="font-bold md:text-xl lg:text-2xl leading-relaxed! text-gray-700 line-clamp-1 wrap-break-word">
                {props?.title}
              </h4>

              {props?.summary && (
                <p className="text-xs leading-snug! md:text-sm lg:text-base line-clamp-3 text-gray-500 wrap-break-word">
                  {props?.summary}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );

  if (props?.media?.length == 1)
    return (
      <div
        onClick={props?.onClick}
        className="cursor-pointer! hover:-translate-y-0.5 transition-transform duration-500 bg-white p-3 sm:p-4 rounded-xs"
      >
        <div className="relative flex space-x-1 overflow-hidden">
          <div className="relative basis-2/5">
            {props?.media?.[0]?.type == "video" && props?.media?.[0]?.url ? (
              <div className="relative rounded-xs min-h-30">
                <VideoThumb src={props?.media?.[0]?.url} />
              </div>
            ) : (
              <div className="shrink-0 relative rounded-xs overflow-hidden min-h-20 lg:h-40 mr-2">
                <ReactImage
                  src={props?.media?.[0]?.url || fallbackImage}
                  alt={props?.title}
                  className="object-contain border border-gray-50 rounded-xs"
                />
              </div>
            )}

            {props?.post_at && (
              <div className="absolute top-0 left-0 right-0 bottom-0 max-sm:mt-1 px-2 ml-1 mt-2.5 flex items-center h-fit bg-black/20 py-1 backdrop-blur-xs w-fit space-x-1.5 text-[9px] lg:text-xs">
                <Clock className="max-sm:size-3.5 size-5 text-amber-400" />
                <span className="text-white mt-0.5">
                  {getFormatHumanReadable(
                    new Date(props?.post_at as string),
                    locale as never
                  )}
                </span>
              </div>
            )}
          </div>

          <div className="basis-3/5 flex flex-col space-y-0.5 md:pl-1.5">
            <div className="flex flex-col space-y-0.5">
              <div className="flex items-center justify-between sm:pb-2">
                {!!props?.is_recommended && (
                  <div className="flex items-center space-x-1 bg-amber-400/5 px-1.5 py-0.5">
                    <span className="max-sm:text-[11px] text-sm text-amber-400">
                      {t("common.recommended-label")}
                    </span>
                  </div>
                )}

                {props?.tags && (
                  <p className="flex items-center space-x-1 text-xs lg:text-sm text-amber-500">
                    {(props?.tags || []).map((t, i) => (
                      <span key={i}>#{t}</span>
                    ))}
                  </p>
                )}
              </div>

              <h4 className="font-bold md:text-xl lg:text-2xl leading-relaxed! text-gray-700 line-clamp-1 wrap-break-word">
                {props?.title}
              </h4>
              {props?.summary && (
                <p className="text-xs leading-snug! md:text-sm lg:text-base line-clamp-3 text-gray-500 wrap-break-word">
                  {props?.summary}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div
      onClick={props?.onClick}
      className="cursor-pointer! hover:-translate-y-0.5 transition-transform duration-500 flex flex-col space-y-3 bg-white p-3 sm:p-4 rounded-xs"
    >
      <div>
        <div className="flex flex-col space-y-0.5">
          <div className="flex items-center justify-between pb-1.5">
            <div className="flex items-center space-x-2">
              {props?.post_at && (
                <div className="flex items-center space-x-1.5 text-[9px] text-black backdrop-blur-sm lg:text-xs w-fit">
                  <Clock className="max-sm:size-3.5 size-5 text-amber-400" />
                  <span className="text-gray-500">
                    {getFormatHumanReadable(
                      new Date(props?.post_at as string),
                      locale as never
                    )}
                  </span>
                </div>
              )}

              {!!props?.is_recommended && (
                <div className="size-2 bg-amber-400 rounded-full" />
              )}

              {!!props?.is_recommended && (
                <span className="max-sm:text-[11px] text-sm text-amber-400 px-3 py-0.5 bg-amber-400/5">
                  {t("common.recommended-label")}
                </span>
              )}
            </div>

            {props?.tags && (
              <p className="flex items-center space-x-1 text-xs lg:text-sm text-amber-500">
                {(props?.tags || []).map((t, i) => (
                  <span key={i}>#{t}</span>
                ))}
              </p>
            )}
          </div>

          <h4 className="font-bold md:text-xl lg:text-2xl text-gray-700 leading-relaxed! line-clamp-1 wrap-break-word">
            {props?.title}
          </h4>

          {props?.summary && (
            <p className="text-xs leading-snug! md:text-sm lg:text-base line-clamp-3 text-gray-500 wrap-break-word">
              {props?.summary}
            </p>
          )}
        </div>
      </div>

      <div className={cn("grid grid-cols-2 gap-2")}>
        {(props?.media || [])?.slice(0, 2).map((x, i) => {
          if (x?.type == "video" && x?.url)
            return <VideoThumb key={i} src={x?.url} />;

          return (
            <div
              key={i}
              className={cn(
                "relative w-full min-h-24 lg:h-49 h-full rounded-xs overflow-hidden"
              )}
            >
              <ReactImage
                src={x?.url || fallbackImage}
                alt={props?.title}
                className="border border-gray-50 object-contain rounded-xs overflow-hidden"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const VideoThumb: React.FC<{ src: string }> = ({ src }) => {
  return (
    <div className="relative h-30 md:aspect-w-16! md:aspect-h-9! overflow-hidden rounded-xs">
      <div className="absolute top-0 right-0 bottom-0 left-0 z-10 cursor-pointer" />
      <div className="size-full bg-gray-100/60 p-2 border border-gray-100">
        <Suspense fallback={<div>...</div>}>
          <ReactPlayer
            className="size-full!"
            src={src}
            fallback={
              <div className="relative rounded-xs bg-gray-100! aspect-w-16! aspect-h-8! animate-pulse">
                <div className="size-full flex justify-center items-center">
                  <Video className="size-10 text-gray-100" />
                </div>
              </div>
            }
          />
        </Suspense>
        <span className="absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2 size-fit! bg-black/10 backdrop-blur-sm p-2 rounded-full">
          <Film className="text-white" />
        </span>
      </div>
    </div>
  );
};
