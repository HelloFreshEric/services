import { useMutation, useQueryClient } from 'react-query';
import { UserAuth } from '@hellofresh/types/auth';
import { postLogin, PostLoginParams } from '../requests/postLogin';
import { UseMutation } from '../../schema';

export const useLogin: UseMutation<UserAuth, PostLoginParams> = (options = {}) => {
  const queryClient = useQueryClient();
  const localizeParams = useLocalizeParams();
  const { fetch } = useFetch();

  return useMutation(params => postLogin(
    { ...params, ...localizeParams, },
    fetch
  ), {
    onSuccess: () => { queryClient.clear(); },
    ...options,
  });
};
