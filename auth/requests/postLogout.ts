import { UserAuth } from '@hellofresh/types/auth';
import { DataAccess, DataAccessType } from '../../schema';

export type PostLogoutParams = {
    refresh_token: string;
}

export const postLogout: DataAccess<DataAccessType.POST, UserAuth, PostLogoutParams> = async (
    params,
    fetch = () => Promise.resolve(null)
) => {
    const response = await fetch(
        '/logout',
        {
            method: DataAccessType.POST,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                refresh_token: params.refresh_token,
            }),
        });

    return response?.json();
};