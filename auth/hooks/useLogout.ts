import { useMutation, useQueryClient } from 'react-query';
import { UserAuth } from '@hellofresh/types/auth';
import { postLogout, PostLogoutParams } from '../requests/postLogout';
import { UseMutation } from '../../schema';

export const useLogout: UseMutation<UserAuth, PostLogoutParams> = (localizeParams, fetch, auth, options = {}) => {
    const queryClient = useQueryClient();

    return useMutation((params) => postLogout(
        { ...params, ...localizeParams, ...(auth ? auth : {}) },
        fetch
    ), {
        onSuccess: () => { queryClient.clear(); },
        ...options,
    });
};