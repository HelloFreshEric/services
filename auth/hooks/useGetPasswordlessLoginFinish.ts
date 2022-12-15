import { useMutation, useQueryClient } from 'react-query';
import { PasswordlessLoginFinish } from '@hellofresh/types/auth';
import { getPasswordlessLoginFinish, GetPasswordlessLoginFinishParams } from '../requests/getPasswordlessLoginFinish'
import { UseMutation } from '../../schema';
import RequestIds from './RequestIds';

export const useGetPasswordlessLoginFinish: UseMutation<PasswordlessLoginFinish, GetPasswordlessLoginFinishParams> = (options = {}) => {
  const queryClient = useQueryClient();
  const localizeParams = useLocalizeParams();
  const { fetch } = useFetch();

  const queryKey = [RequestIds['auth.passwordlessLoginFinish']];

  return useMutation(params => getPasswordlessLoginFinish(
    { ...params, ...localizeParams, },
    queryKey,
    fetch
  ), {
    onSuccess: () => { queryClient.clear(); },
    onError: () => { queryClient.clear(); },
    ...options,
  });
};