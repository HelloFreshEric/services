import { UserAuth } from '@hellofresh/types/auth';
import { DataAccess, DataAccessType } from '../../schema';

export type PostLoginParams = {
  email: string;
  password: string;
}

export const postLogin: DataAccess<DataAccessType.POST, UserAuth, PostLoginParams> = async (
  params,
  queryKey,
  fetch
) => {
  const response = await fetch(
    '/login',
    queryKey,
    {
      method: DataAccessType.POST,
      data: {
        username: params.email,
        password: params.password,
      },
      query: {
        country: params.systemCountry,
      },
      parentSpan: params.parentSpan,
    },
    { isAuthRequest: true, skipGetAuth: true }
  );

  return response.json();
};