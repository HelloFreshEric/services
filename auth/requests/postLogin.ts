import { UserAuth } from '@hellofresh/types/auth';
import { DataAccess, DataAccessType } from '../../schema';

export type PostLoginParams = {
  email: string;
  password: string;
}

export const postLogin: DataAccess<DataAccessType.POST, UserAuth, PostLoginParams> = async (
  params,
  fetch = () => Promise.resolve(null),
) => {
  const response = await fetch(
    '/login',
    {
      headers: { 'Content-Type': 'application/json' },
      method: DataAccessType.POST,
      body: JSON.stringify({
        username: params.email,
        password: params.password,
      }),
    },
  );

  return response?.json();
};