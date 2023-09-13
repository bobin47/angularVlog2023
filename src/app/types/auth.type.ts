import { User } from './user.type';

export type ResponseAuth = {
  res: {
    data: {
      access_token: string;
      refresh_token: string;
      user: User;
    };
    status: number;
    message: string;
  };
};

export type ResponseRegister = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  status: number;
};
