export const setRefresherTokenFormLC = (refresh_token: string) => {
  localStorage.setItem('refresh_token', refresh_token);
};

export const getRefresherTokenFormLC = () => {
  return localStorage.getItem('refresh_token');
};

export const setAccessTokenFormLC = (access_token: string) => {
  localStorage.setItem('access_token', access_token);
};

export const getAccessTokenFormLC = () => {
 return localStorage.getItem('access_token');
};

export const setUserFormLC = (user: any) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUserFormLC = () => {
  const profile = localStorage.getItem('user');
  return profile ? JSON.parse(profile) : null;
};

export const clearLC = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('user');
  localStorage.removeItem('refresh_token');
};
