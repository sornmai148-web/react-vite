import { getNewsList } from "@/api/resource";
import { QUERY_KEYS } from "@/config/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useGetRelatedNewsList = (opt: {
  type_id?: number;
  type_pid?: number;
  pageSize?: number;
  locale: string;
}) =>
  useQuery({
    queryKey: [QUERY_KEYS.RELATED_NEWS_LIST, opt],
    queryFn: async () => {
      const response = await getNewsList(
        {
          page: 1,
          page_size: opt?.pageSize || 8,
          type_pid: opt?.type_pid,
          type_id: opt?.type_id,
        },
        opt?.locale
      );
      return response?.data?.list;
    },
    staleTime: 900000, //15 minutes
    gcTime: 900000,
  });
