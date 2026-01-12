// import { DesktopFilter } from "@/modules/shared/components/filter/desktop";
// import { TextMarquee } from "@/modules/shared/components/textMarquee";
// import { AdvertisementSlider } from "@/modules/shared/components/advertisemen";
// import { IFilterOption } from "@/api/interface";
// import { NewsList } from "@/modules/shared/components/news/news-list";

import type { IFilterOption } from "@/api/interface";
import { DesktopFilter } from "@/modules/shared/components/filter/desktop";
import { NewsList } from "@/modules/shared/components/news/NewsList";

interface Props {
  filterOptions: Array<IFilterOption>;
}

export const DesktopFilterList: React.FC<Props> = (props) => {
  const { filterOptions } = props;

  return (
    <>
      {/* <div className="max-md:hidden">
        <AdvertisementSlider variant="desktop" />
      </div> */}

      <div className="max-md:hidden relative grid grid-cols-12 lg:gap-3 p-3 lg:max-w-5xl xl:max-w-6xl mx-auto mt-4">
        <div className="col-span-4">
          <DesktopFilter filterOptions={filterOptions} />
        </div>

        <div className="col-span-8">
          <NewsList />
        </div>
      </div>
    </>
  );
};
