export type CategoryType = {
  id: number;
  name: string;
  description: string;
  status: number;
  created_at: string;
  updated_at: string;
};

export type PostDetail = {
  created_at: string;
  description: string;
  id: number;
  status: number;
  thumbnail: string;
  title: string;
  updated_at: string;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: null;
  };
};

export type CompanyType = {
  address: string;
  created_at: string;
  description: string;
  id: number;
  logo: string;
  name: string;
  updated_at: string;
};
