import { UserAuth } from '@hellofresh/types/auth';
import { DataAccess, DataAccessType } from '../../schema';

export type PostLogoutParams = {
    refresh_token: string;
}

export const postLogout: DataAccess<DataAccessType.POST, UserAuth, PostLogoutParams> = async (
    params,
    queryKey,
    fetch = localFetch
) => {
    const response = await fetch(
        '/logout',
        queryKey,
        {
            method: DataAccessType.POST,
            data: {
                refresh_token: params.refresh_token,
            },
            query: {
                country: params.systemCountry,
                locale: params.locale,
            },
            parentSpan: params.parentSpan,
        });

    return response.json();
};