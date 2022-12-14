import { useMutation, useQueryClient } from 'react-query';
import { UserAuth } from '@hellofresh/types/auth';
import { postLogout, PostLogoutParams } from '../requests/postLogout';
import { UseMutation } from '../../schema';
import RequestIds from './RequestIds';

export const useLogout: UseMutation<UserAuth, PostLogoutParams> = (options = {}) => {
    const queryClient = useQueryClient();
    const localizeParams = useLocalizeParams();
    const { fetch } = useFetch();

    const queryKey = [RequestIds['auth.logout']];

    return useMutation((params) => postLogout(
        { ...params, ...localizeParams, },
        queryKey,
        fetch
    ), {
        onSuccess: () => { queryClient.clear(); },
        ...options,
    });
};