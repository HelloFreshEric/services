import { useMutation, useQueryClient } from 'react-query';
import { UserAuth } from '@hellofresh/types/auth';
import { postLogin, PostLoginParams } from '../requests/postLogin';
import { UseMutation } from '../../schema';

export const useLogin: UseMutation<UserAuth, PostLoginParams> = (localizeParams, fetch, auth, options = {}) => {
  const queryClient = useQueryClient();

  return useMutation(params => postLogin(
    { ...params, ...localizeParams, ...(auth ? auth : {}) },
    fetch
  ), {
    onSuccess: () => { queryClient.clear(); },
    ...options,
  });
};
