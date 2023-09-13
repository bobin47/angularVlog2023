export interface User {
  created_at: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  status: number;
  updated_at: string;
}

export type ResponseAction = {
  status: number;
  message: string;
  user: User;
};
