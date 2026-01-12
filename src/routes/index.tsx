import { OverlayLoader } from "@/modules/shared/components/OverlayLoader";
import { TextMarqueeRunner } from "@/modules/shared/components/TextMarqueeRunner";
import { createFileRoute, MatchRoute } from "@tanstack/react-router";

import { useTranslation } from "react-i18next";
import { getFilterOptions } from "@/api/resource";
import { getCurrentLocale } from "@/utils/getCurrentLocale";
import { DesktopFilterList } from "@/modules/features/home/components/desktop-filter-list";
import { lazy } from "react";

const AdvertisementSlider = lazy(() =>
  import("@/modules/shared/components/advertisment").then((m) => ({
    default: m.AdvertisementSlider,
  }))
);

export const Route = createFileRoute("/")({
  loaderDeps: () => {
    const { convertedLocale } = getCurrentLocale();
    return { locale: convertedLocale };
  },
  loader: ({ deps: { locale } }) => getFilterOptions(locale),
  component: Homepage,
  staleTime: 10_000,
  gcTime: 10_000,
});

function Homepage() {
  const filterOptions = Route.useLoaderData();

  const { t } = useTranslation();

  return (
    <>
      <MatchRoute to="." pending>
        <OverlayLoader />
      </MatchRoute>

      <div className="relative min-h-[calc(100dvh-150px)] h-auto">
        {/*-- Text animation --*/}
        <TextMarqueeRunner text={t("components.marquee.content")} />
        <div className="max-md:hidden">
          <AdvertisementSlider variant="desktop" />
        </div>

        <DesktopFilterList filterOptions={filterOptions?.data?.list || []} />

        {/* <Link to="/detail/$newId" params={{ newId: "1" }} viewTransition>
          Detail
          <MatchRoute to="/detail/$newId" pending>
            <OverlayLoader />
          </MatchRoute>
        </Link> */}
      </div>
    </>
  );
}
