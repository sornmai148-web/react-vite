import { getFormatHumanReadable } from "@/config/dayJs";
import { getCurrentLocale } from "@/utils/getCurrentLocale";
import { useGetRelatedNewsList } from "../../hooks/useGetRelatedNewsList";
import { useTranslation } from "react-i18next";
import { RelatedNewsCard } from "./RelatedNewsCard";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  filterOutId: number;
  parentId?: number | string;
  id?: number | string;
}

export const RelatedNewsList: React.FC<Props> = (props) => {
  const { filterOutId, parentId, id } = props;
  const { convertedLocale: locale } = getCurrentLocale();

  const { isLoading, data: response } = useGetRelatedNewsList({
    locale,
    pageSize: 4,
    type_pid: parentId ? +parentId : undefined,
    type_id: id ? +id : undefined,
  });

  const { t } = useTranslation("translation");

  if (isLoading && !response)
    return (
      <div className="flex flex-col space-y-2 px-4 pt-3 mb-3 h-fit bg-white mx-1.5 rounded-xs pb-2.5">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="aspect-video">
            <div className="relative size-full flex flex-col justify-between p-3">
              <Skeleton className="h-4 w-1/4 bg-gray-300/70 rounded-xs" />

              <div className="flex flex-col space-y-1.5 relative">
                <Skeleton className="h-3 w-1/3 bg-gray-300/70 rounded-xs" />
                <Skeleton className="h-4 w-1/2 bg-gray-300/70 rounded-xs" />
                <Skeleton className="h-3 w-1/4 bg-gray-300/70 rounded-xs" />
              </div>
            </div>
          </Skeleton>
        ))}
      </div>
    );

  const data = response?.filter((n) => n?.id != filterOutId) || [];

  if (!data?.length) return null;

  return (
    <div className="px-4 pt-3 mb-3 h-fit bg-white mx-1.5 rounded-xs pb-2.5">
      <div className="flex items-center space-x-2 text-amber-500">
        <h4 className="font-bold md:text-sm lg:text-base">
          {t("common.related-news")}
        </h4>
      </div>
      <div className="w-full h-px bg-gray-200/50 my-2 lg:my-2.5" />

      <div className="flex flex-col space-y-2">
        {data?.map((rn) => (
          <RelatedNewsCard
            key={rn?.id}
            id={rn?.id}
            parendId={parentId as number}
            selftId={id as number}
            post_at={
              rn?.post_at
                ? getFormatHumanReadable(
                    new Date(rn?.post_at as string),
                    locale as never
                  )
                : ""
            }
            title={rn?.title || ""}
            summary={rn?.summary || ""}
            type={rn?.type}
            isRecommend={!!rn?.is_recommended}
            src={(rn?.media || [])?.at(0)?.url}
          />
        ))}
      </div>
    </div>
  );
};
