import { fetchApi } from './fetchApi';

export const itemList = async (tenantId: string) => {
  return fetchApi(`/api/${tenantId}/items`);
};

export const detailItem = async (tenantId: string, itemId: number) => {
  return fetchApi(`/api/${tenantId}/items/${itemId}`);
};
