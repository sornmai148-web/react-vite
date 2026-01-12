import InfiniteScroll from "react-infinite-scroll-component";

import { Image as Photo, BookOpen, TextSearch } from "lucide-react";

import { NewsCard } from "./NewsCard";
import { useQueryParams } from "../../hooks/useQueryParams";
import { useFilterMedata } from "../../hooks/useFilterMedata";
import { Spinner } from "../Spinner";
import { useNavigate } from "@tanstack/react-router";
import { useNewsSearchList } from "../../hooks/useNewsSearchList";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranslation } from "react-i18next";
import { EmptyState } from "../EmptyState";

import type { INewsData } from "@/api/interface";

export const NewsList = () => {
  const navigate = useNavigate();

  const mqs = useQueryParams();
  const { data: metadata } = useFilterMedata();

  const { isLoading, hasNextPage, fetchNextPage, data, total } =
    useNewsSearchList({
      keyword: mqs?.search,
      type_id: +mqs?.selfId,
      type_pid: +mqs?.parentId,
    });

  const { t } = useTranslation();

  //-- Being Loading
  if (isLoading && !data?.length) return <ShimmerComp />;

  //-- Empty response
  if (!mqs?.search && !isLoading && !data?.length)
    return <EmptyDataComp total={total} />;

  //-- Empty search response
  if (mqs?.search && !isLoading && !data?.length)
    return <EmptySearchComp total={total} />;

  //-- Header lighlight label display
  const highLightLabel = metadata?.length
    ? metadata?.join(" / ").toString()
    : t("common.news-label");

  return (
    <div className="relative">
      <div className="relative pb-4 overflow-y-auto scrollbar-none">
        {mqs?.search ? (
          <div className="flex items-center space-x-2 text-primary rounded-2xl pb-4 pt-1 px-1 font-bold">
            <span>
              {t("common.search-result", { total: `${total}` || `0` })}
            </span>
            <div className="grow h-px bg-gray-300" />
          </div>
        ) : (
          <div className="px-2 pb-3 md:mb-2 flex items-center space-x-4">
            <div className="flex items-center space-x-3 font-bold sm:text-xl text-amber-500">
              <span>
                <BookOpen className="size-5 md:size-6 lg:size-7" />
              </span>
              <span>{highLightLabel}</span>
            </div>
            <div className="grow h-px bg-gray-200" />
          </div>
        )}

        <InfiniteScroll
          scrollThreshold={0.9}
          dataLength={(data || [])?.length}
          next={fetchNextPage}
          hasMore={hasNextPage}
          className="contents"
          loader={
            <div className="flex justify-center pb-3 pt-3.5 items-center">
              <Spinner />
            </div>
          }
        >
          <div className="flex flex-col space-y-2">
            {(data || [])?.map((x, i) => {
              return (
                <div key={i}>
                  <NewsCard
                    key={i}
                    {...(x as INewsData)}
                    onClick={() => {
                      navigate({
                        to: "/detail/$newId",
                        params: { newId: `${x?.id}` },
                        search: {
                          parentId: mqs?.parentId ? +mqs?.parentId : undefined,
                          id: mqs?.selfId ? +mqs?.selfId : undefined,
                        },
                      });
                    }}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

const EmptyDataComp: React.FC<{ total: number }> = ({ total }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="pl-2 py-2 mb-2 flex items-center space-x-4">
        <div className="flex items-center space-x-3 font-bold sm:text-xl text-amber-500">
          <span>
            <TextSearch className="size-5 md:size-6 lg:size-7" />
          </span>
          <span>{t("common.search-result", { total: `${total || 0}` })}</span>
        </div>
        <div className="grow h-px bg-gray-200" />
      </div>

      <div className="bg-white rounded-xs max-md:my-4">
        <EmptyState
          type="default"
          title={t("components.list-empty-state.title")}
          subtitle={t("components.list-empty-state.subtitle")}
        />
      </div>
    </>
  );
};

const EmptySearchComp: React.FC<{ total: number }> = ({ total }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="pl-2 py-2 mb-2 flex items-center space-x-4">
        <div className="flex items-center space-x-3 font-bold sm:text-xl text-amber-500">
          <span>
            <TextSearch className="size-5 md:size-6 lg:size-7" />
          </span>
          <span>{t("common.search-result", { total: `${total || 0}` })}</span>
        </div>
        <div className="grow h-px bg-gray-200" />
      </div>

      <div className="bg-white rounded-xl max-md:my-4">
        <EmptyState
          type="search"
          title={t("components.search-empty-state.title")}
          subtitle={t("components.search-empty-state.subtitle")}
        />
      </div>
    </>
  );
};

const ShimmerComp = () => (
  <div className="flex flex-col space-y-4">
    <Skeleton className="flex items-center space-x-2">
      <Skeleton className="bg-gray-200/60 w-40 h-8 rounded-xs" />
      <Skeleton className="grow bg-gray-200 h-[1.5px]" />
    </Skeleton>

    <div className="flex flex-col space-y-3 pb-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton
          key={i}
          className="p-3 flex flex-col space-y-3 bg-gray-200/60 rounded-xs"
        >
          <div className="flex items-center justify-between">
            <Skeleton className="w-20 h-4 rounded-xs" />
            <Skeleton className="w-20 h-4 rounded-xs" />
          </div>

          <Skeleton className="w-72 h-4 rounded-xs" />

          <div className="flex flex-col space-y-2">
            <Skeleton className="w-5/6 h-2 rounded-xs" />
            <Skeleton className="w-full h-2 rounded-xs" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Skeleton className="w-full h-24 rounded-xs flex justify-center items-center">
              <Photo className="size-9 text-gray-200" />
            </Skeleton>
            <Skeleton className="w-full h-24 rounded-xs flex justify-center items-center">
              <Photo className="size-9 text-gray-200" />
            </Skeleton>
          </div>
        </Skeleton>
      ))}
    </div>
  </div>
);
