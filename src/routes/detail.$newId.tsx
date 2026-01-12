import { getNewsDetail } from "@/api/resource";
import { getFormatDatetime, getFormatHumanReadable } from "@/config/dayJs";
import { Advertisement } from "@/modules/shared/components/advertisment";
import { Container } from "@/modules/shared/components/Container";
import { GallerSlider } from "@/modules/shared/components/GallerySlider";
import { NewsBreadcrumb } from "@/modules/shared/components/NewsBreadcrumb";
import { RelatedNewsList } from "@/modules/shared/components/related-news";
import { getCurrentLocale } from "@/utils/getCurrentLocale";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Megaphone } from "lucide-react";
import { useTranslation } from "react-i18next";

type DetailQueryParams = {
  parentId?: number | string;
  id?: number | string;
};

export const Route = createFileRoute("/detail/$newId")({
  validateSearch: (query: DetailQueryParams): DetailQueryParams => ({
    parentId: query?.parentId,
    id: query?.id,
  }),
  loaderDeps: ({ search }) => {
    const { convertedLocale } = getCurrentLocale();
    return { locale: convertedLocale, ...search };
  },
  loader: ({ params: { newId }, deps: { locale } }) => {
    return getNewsDetail(+newId, locale);
  },
  component: RouteComponent,
});

function RouteComponent() {
  const data = Route.useLoaderData()?.data;

  const routeParams = Route.useParams();
  const queryParams = Route.useLoaderDeps();
  const locale = queryParams?.locale;

  const { t } = useTranslation("translation");

  return (
    <div className="grid grid-cols-12 max-w-6xl mx-auto min-h-[calc(100dvh-145px)] md:min-h-[calc(100dvh-210px)]">
      <div className="col-span-12 md:col-span-8 max-md:border-r max-md:border-l border-gray-200/50 md:pt-2 max-sm:mt-1.5">
        <div className="py-2 mb-2! md:py-3 md:px-2 md:mx-1.5! rounded-xs flex items-center justify-between bg-white">
          <NewsBreadcrumb parentLabel={data?.type} />
        </div>

        <Container className="max-md:py-6 md:p-6 bg-white mx-1.5 mb-4 rounded-xs">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              {data?.post_at && (
                <span className="text-[13px] sm:text-sm text-gray-500">
                  {data?.post_at
                    ? getFormatDatetime(
                        new Date(data?.post_at || ""),
                        locale as never
                      )
                    : null}
                </span>
              )}

              {data?.post_at && (
                <div className="flex space-x-1 md:space-x-2.5 items-center max-md:text-[10px] md:text-sm text-black backdrop-blur-sm px-2 rounded-sm py-1 md:px-3.5 md:py-1.5 w-fit">
                  <Clock className="inline size-3 md:size-4 text-amber-500" />
                  <span>
                    {data?.post_at
                      ? getFormatHumanReadable(
                          new Date(data?.post_at as string),
                          locale as never
                        )
                      : null}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col space-y-2 md:space-y-4">
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-snug font-bold wrap-break-word">
                {data?.title || ""}
              </h1>

              {data?.summary && (
                <p className="text-gray-500 whitespace-pre-line wrap-break-word leading-relaxed 2xl:text-lg">
                  {data?.summary}
                </p>
              )}

              <p className="flex items-center space-x-2 sm:space-x-3 text-xs text-amber-500 md:text-sm font-medium">
                {(data?.tag || [])?.map((x, i) => (
                  <span key={i}>&#35;{x}</span>
                ))}
              </p>
            </div>

            {((data?.media || [])?.length || 0) > 0 && (
              <GallerSlider items={data?.media || []} hideAds />
            )}

            {data?.content && (
              <p
                className="text-gray-500 whitespace-pre-line wrap-break-word 2xl:text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data?.content || "" }}
              />
            )}
          </div>
        </Container>
      </div>

      <div className="sticky top-20 col-span-12 md:col-span-4">
        {/*-- Adverts --*/}
        <div className="mt-2 px-4 pt-3 h-fit bg-white mx-1.5 rounded-xs mb-3">
          <div className="flex items-center space-x-2 text-amber-500">
            <Megaphone className="size-4" />
            <h4 className="font-bold md:text-sm lg:text-base">
              {t("common.advert-label")}
            </h4>
          </div>

          <div className="w-full h-px bg-gray-200/50 my-2 lg:my-2.5" />
          <div className="pb-6">
            <Advertisement isPartialShow hideHighlight />
          </div>
        </div>

        {/*-- Related --*/}
        <RelatedNewsList
          filterOutId={+routeParams?.newId}
          parentId={queryParams?.parentId}
          id={queryParams?.id}
        />
      </div>
    </div>
  );
}
