import { Container } from "../../Container";
import { SearchBar } from "../SearchBar";
import { HorizontalScrollFilter } from "./HorizontalScrollFilter";

import type { IFilterOption } from "@/api/interface";
import { ModalOptionFilter } from "./ModalOptionFilter";

/**
 * @description: Mobile home search with filter
 */

interface Props {
  filterOptions: Array<IFilterOption>;
}

export const MobileFilter: React.FC<Props> = ({ filterOptions }) => {
  //-- 渲染清空页面，如果没有过滤配置存在
  const shouldShow = !!filterOptions?.length;

  return (
    <div className="md:hidden">
      <div className="sticky top-14 z-20!">
        <Container className="flex flex-col space-y-2 px-1!">
          {/*-- For search --*/}
          <SearchBar className="mt-1.5!" />

          {/*-- For filter --*/}
          {shouldShow && (
            <div className="flex items-center space-x-2 pl-2 pr-1 py-1 rounded-xs bg-white">
              <div className="relative grow">
                <div className="col-span-10 grow grid gap-2 grid-cols-2 rounded-xs overflow-x-auto scrollbar-none">
                  <HorizontalScrollFilter filterOptions={filterOptions} />
                </div>
              </div>

              <div className="flex mb-auto md:hidden">
                <ModalOptionFilter filterOptions={filterOptions} />
              </div>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};
