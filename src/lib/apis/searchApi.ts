import { client } from './client';

export const getSearchData = async (text: string) => {
  const url = `/sick?q=${text}`;
  const response = await client.get(url);
  return response.data;
}
