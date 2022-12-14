import { useMutation, useQueryClient } from 'react-query';
import { UserAuth } from '@hellofresh/types/auth';
import { postLogin, PostLoginParams } from '../requests/postLogin';
import { UseMutation } from '../../schema';
import RequestIds from './RequestIds';

export const useLogin: UseMutation<UserAuth, PostLoginParams> = (options = {}) => {
  const queryClient = useQueryClient();
  const localizeParams = useLocalizeParams();
  const { fetch } = useFetch();

  const queryKey = [RequestIds['auth.login']];

  return useMutation(params => postLogin(
    { ...params, ...localizeParams, },
    queryKey,
    fetch
  ), {
    onSuccess: () => { queryClient.clear(); },
    ...options,
  });
};
