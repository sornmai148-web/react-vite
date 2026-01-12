import { MobileFilter } from "@/modules/shared/components/filter/mobile";
import { NewsList } from "@/modules/shared/components/news/NewsList";

import type { IFilterOption } from "@/api/interface";
import { Container } from "@/modules/shared/components/Container";
import { AdvertisementSlider } from "@/modules/shared/components/advertisment";

interface Props {
  filterOptions: Array<IFilterOption>;
}

export const MobileFilterList: React.FC<Props> = (props) => {
  const { filterOptions } = props;

  return (
    <section className="lg:max-w-5xl xl:max-w-6xl mx-auto">
      {/*-- Top filter --*/}
      <MobileFilter filterOptions={filterOptions} />

      {/*-- Advertisment --*/}
      <div className="md:hidden px-1 mt-2">
        <AdvertisementSlider variant="mobile" />
      </div>

      {/*-- Infinite List --*/}
      <Container className="md:hidden pt-3 mt-3 py-0 px-1!">
        <NewsList />
      </Container>
    </section>
  );
};
