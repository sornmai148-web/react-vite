import { useQueryState, parseAsString } from "nuqs";
import { useFilterMedata } from "./useFilterMedata";

export const useQueryParams = () => {
  const { setData: updateMedata } = useFilterMedata();

  const [search, setSearch] = useQueryState(
    "search",
    parseAsString.withDefault("")
  );

  const [parentId, setParentId] = useQueryState(
    "parent_id",
    parseAsString.withDefault("")
  );

  const [selfId, setSelfId] = useQueryState(
    "id",
    parseAsString.withDefault("")
  );

  //-- Update search params
  function updateSearch(search: string) {
    setSearch(search);
  }

  //-- Update parent id
  function updateParentId(id: number | string) {
    setParentId(`${id}`);
  }

  function updateSelfId(id: number | string) {
    setSelfId(`${id}`);
  }

  function clearAll() {
    setParentId("");
    setSelfId("");
    updateMedata([]);
  }

  return {
    search,
    parentId,
    selfId,
    updateSearch,
    updateParentId,
    updateSelfId,
    clearAll,
  };
};
