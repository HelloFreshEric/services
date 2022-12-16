import { UserAuth } from '@hellofresh/types/auth';
import { DataAccess, DataAccessType } from '../../schema';

export type PostLogoutParams = {
    refresh_token: string;
}

export const postLogout: DataAccess<DataAccessType.POST, UserAuth, PostLogoutParams> = async (
    params,
    fetch = () => Promise.resolve(null)
) => {
    const queryString = new URLSearchParams({ locale: params.locale, country: params.systemCountry });

    const response = await fetch(
        '/logout' + (queryString ? "?" + queryString : ''),
        {
            method: DataAccessType.POST,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                refresh_token: params.refresh_token,
            }),
        });

    return response?.json();
};