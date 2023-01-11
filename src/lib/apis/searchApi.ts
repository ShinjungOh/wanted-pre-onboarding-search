import { client } from './client';
import { SickItemProps } from '../types/sickItem.interface';

export const getSearchData = async (text: string): Promise<Array<SickItemProps>> => {
  const url = `/sick?q=${text}`;
  const response = await client.get(url);
  return response.data;
}
