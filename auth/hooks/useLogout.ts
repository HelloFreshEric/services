import { useMutation, useQueryClient } from 'react-query';
import { UserAuth } from '@hellofresh/types/auth';
import { postLogout, PostLogoutParams } from '../requests/postLogout';
import { UseMutation } from '../../schema';
import { useFetch } from '../../useFetch';
import { useLocalizeParams } from '../../useLocalizeParams';
import { useAutorizationParams } from '../../useAutorizationParams';

export const useLogout: UseMutation<UserAuth, PostLogoutParams> = (options = {}) => {
    const queryClient = useQueryClient();
    const localizeParams = useLocalizeParams();
    const fetch = useFetch();
    const auth = useAutorizationParams();

    return useMutation((params) => postLogout(
        { ...params, ...localizeParams, ...(auth ? auth : {}) },
        fetch
    ), {
        onSuccess: () => { queryClient.clear(); },
        ...options,
    });
};