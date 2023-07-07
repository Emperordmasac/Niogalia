import { baseApi } from '../api';

export const loginFn = async (authToken: string) => {
  return await baseApi.post(
    '/create-or-update-user',
    {},
    {
      headers: { authToken },
    }
  );
};
