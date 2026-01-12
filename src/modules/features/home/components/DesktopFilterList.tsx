import { AdvertisementSlider } from "@/modules/shared/components/advertisment";
import { DesktopFilter } from "@/modules/shared/components/filter/desktop";
import { NewsList } from "@/modules/shared/components/news/NewsList";

import type { IFilterOption } from "@/api/interface";

interface Props {
  filterOptions: Array<IFilterOption>;
}

export const DesktopFilterList: React.FC<Props> = (props) => {
  const { filterOptions } = props;

  return (
    <>
      <div className="max-md:hidden">
        <AdvertisementSlider variant="desktop" />
      </div>

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
