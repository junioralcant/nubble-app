export type MetaDataPageAPI = {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string | null;
  previous_page_url: string | null;
};

/**
 * @description Interface that defines the format of on API data page
 * @template Data Page data type
 */
export type PageAPI<Data> = {
  meta: MetaDataPageAPI;
  data: Data[];
};
