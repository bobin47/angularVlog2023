import { User } from './user.type';

export type ResponseData<T> = {
  total: number;
  currentPage: number;
  prevPage: number | null;
  nextPage: number | null;
  data: T;
};
