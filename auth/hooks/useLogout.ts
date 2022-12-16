import { useMutation, useQueryClient } from 'react-query';
import { UserAuth } from '@hellofresh/types/auth';
import { postLogout, PostLogoutParams } from '../requests/postLogout';
import { UseMutation } from '../../schema';

export const useLogout: UseMutation<UserAuth, PostLogoutParams> = (options = {}) => {
    const queryClient = useQueryClient();
    const localizeParams = useLocalizeParams();
    const { fetch } = useFetch();

    return useMutation((params) => postLogout(
        { ...params, ...localizeParams, },
        fetch
    ), {
        onSuccess: () => { queryClient.clear(); },
        ...options,
    });
};