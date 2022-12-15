import { PasswordlessLoginFinish } from '@hellofresh/types/auth';
import { DataAccess, DataAccessType } from '../../schema';

export type GetPasswordlessLoginFinishParams = {
  code: string;
  email: string;
  country: string;
  channel: string;
  redirect_url: string;
  public_id: string;
}

export const getPasswordlessLoginFinish: DataAccess<DataAccessType.GET, PasswordlessLoginFinish, GetPasswordlessLoginFinishParams> = async (
  params,
  queryKey,
  fetch
) => {
  const { code, email, country, channel, redirect_url, public_id } = params;

  const response = await fetch(
    '/v1/passwordless/magic-link/finish',
    queryKey,
    {
      query: {
        code,
        email,
        country,
        channel,
        redirect_url,
        public_id,
      },
      parentSpan: params.parentSpan,
    }
  );

  return response?.json();
};