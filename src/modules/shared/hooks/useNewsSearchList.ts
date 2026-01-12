import type { INewsListRequestPayload } from "@/api/interface";
import { getNewsList } from "@/api/resource";
import { getCurrentLocale } from "@/utils/getCurrentLocale";
import { useInfiniteQuery } from "@tanstack/react-query";

import { useState } from "react";

const PAGE_LIMIT = 25;

export const useNewsSearchList = (
  queryParams: Omit<INewsListRequestPayload, "page" | "page_size">
) => {
  const { keyword, type_id, type_pid } = queryParams;

  const [total, setTotal] = useState(0);
  const { convertedLocale: locale } = getCurrentLocale();

  const validSearchKeyword =
    (keyword || "")?.length > 50 ? keyword?.slice(0, 50) : keyword;

  const {
    isFetching,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    data,
  } = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: [
      "news-search",
      locale,
      type_id,
      type_pid,
      validSearchKeyword,
      total,
    ],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await getNewsList(
        {
          page: pageParam,
          page_size: PAGE_LIMIT,
          keyword: keyword ? validSearchKeyword : undefined,
          type_id: type_id ? type_id : undefined,
          type_pid: type_pid ? type_pid : undefined,
        },
        locale
      );

      setTotal(response?.data?.total || 0);
      return response?.data?.list;
    },

    getNextPageParam: (lastPage, __, lastPageParam) => {
      const page =
        (lastPage?.length || 0) < PAGE_LIMIT ? undefined : lastPageParam + 1;
      return page;
    },
  });

  return {
    isFetching,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    data: data?.pages?.flatMap((page) => page),
    total,
  };
};
