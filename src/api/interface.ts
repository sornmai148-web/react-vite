/**
 * @description: Reusable Interface
 */
export type IMedia = { type?: "video" | "image"; url?: string };
type PaginateUnion = "no-paginate" | "paginate";
type ListNoPaginate<T> = { list: Array<T> };
type ListPaginate<T> = Pagination & ListNoPaginate<T>;

type Pagination = {
  page: number;
  page_size: number;
  total: number;
};

type ISingleTon<T> = {
  code: number;
  msg: string;
  data: T;
};

type ICollection<T, U extends PaginateUnion> = {
  code: number;
  msg: string;
  data: U extends "no-paginate" ? ListNoPaginate<T> : ListPaginate<T>;
};

interface ITimestamps {
  created_at: string;
  updated_at: string;
}

/**
 * @description: Filter options interface
 */

export interface IFilterOption extends ITimestamps {
  id: number;
  pid: number | null;
  name: string;
  lang: string;
  children?: Array<IFilterOption> | null;
}

/**
 * @description: [search,filter] news list interface
 */
export interface INewsListRequestPayload {
  page: number;
  page_size: number;
  keyword?: string;
  type_id?: number;
  type_pid?: number;
}

export interface INewsData extends Pick<ITimestamps, "created_at"> {
  id: number;
  is_recommended: number | boolean;
  lang: string;
  author?: string;
  title: string;
  summary?: string;
  tags?: Array<string>;
  media?: Array<IMedia>;
  type: string;
  post_at: string;
}

/**
 * @description: News detail interface
 */
export interface INewsDetailData extends Pick<ITimestamps, "created_at"> {
  id: number;
  isRecommended: boolean | number;
  type: string;
  title: string;
  author?: string;
  summary?: string;
  content?: string;
  tag?: Array<string>;
  media?: Array<IMedia>;
  post_at: string;
}

//-- Export
export type IFilterOptionsResponses = ICollection<IFilterOption, "no-paginate">;
export type INewsListResponses = ICollection<INewsData, "paginate">;
export type INewsDetailResponse = ISingleTon<INewsDetailData>;
