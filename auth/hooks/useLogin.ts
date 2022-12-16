import { useMutation, useQueryClient } from 'react-query';
import { UserAuth } from '@hellofresh/types/auth';
import { postLogin, PostLoginParams } from '../requests/postLogin';
import { UseMutation } from '../../schema';
import { useFetch } from '../../useFetch';
import { useLocalizeParams } from '../../useLocalizeParams';
import { useAutorizationParams } from '../../useAutorizationParams';

export const useLogin: UseMutation<UserAuth, PostLoginParams> = (options = {}) => {
  const queryClient = useQueryClient();
  const localizeParams = useLocalizeParams();
  const fetch = useFetch();
  const auth = useAutorizationParams();

  return useMutation(params => postLogin(
    { ...params, ...localizeParams, ...(auth ? auth : {}) },
    fetch
  ), {
    onSuccess: () => { queryClient.clear(); },
    ...options,
  });
};
