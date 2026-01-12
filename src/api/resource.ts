import { fetchApi } from "./main";
import * as I from "./interface";

/**
 * @description: Get filter Options
 */
export async function getFilterOptions(langCode: string) {
  try {
    const reponses = await fetchApi<I.IFilterOptionsResponses>(
      "/filter-options",
      { headers: { lang: langCode } }
    );
    if (reponses?.code != 0) throw new Error(reponses?.msg);
    return reponses;
  } catch (error) {
    if (error instanceof Error) {
      return {
        code: -111,
        msg: `[API:fetch:error]: ${error?.message}`,
        data: null,
      };
    }
  }
}

/**
 * @description: Get news list [search,filter]
 */
export async function getNewsList(
  filterOptions: I.INewsListRequestPayload,
  langCode: string
) {
  try {
    const responses = await fetchApi<I.INewsListResponses>("/news-list", {
      headers: { lang: langCode },
      body: filterOptions,
    });
    if (responses?.code != 0) throw new Error(responses?.msg);
    return responses;
  } catch (error) {
    if (error instanceof Error) {
      return {
        code: -111,
        msg: `[API:fetch:error]: ${error?.message}`,
        data: null,
      };
    }
  }
}

/**
 * @description: Get news detail
 */
export async function getNewsDetail(id: number, langCode: string) {
  try {
    const response = await fetchApi<I.INewsDetailResponse>("/detail", {
      headers: { lang: langCode },
      body: { id },
    });
    if (response?.code != 0) throw new Error(response?.msg);
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return {
        code: -111,
        msg: `[API:fetch:error]: ${error?.message}`,
        data: null,
      };
    }
  }
}
