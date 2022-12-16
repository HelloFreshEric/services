import { CustomerAddresses } from '@hellofresh/types/customers';
import { DataAccess, DataAccessType } from '../../schema';

export type GetCustomerAddressesParams = {
    id?: string;
};

export const getCustomerAddresses: DataAccess<DataAccessType.GET, CustomerAddresses, GetCustomerAddressesParams> = async (
    { id = 'me', locale, systemCountry, auth = { token_type: '', access_token: '' }, },
    fetch = () => Promise.resolve(null),
) => {
    const queryString = new URLSearchParams({ locale: locale, country: systemCountry });

    const response = await fetch(
        `/api/customers/${id}/addresses` + (queryString ? "?" + queryString : ''),
        {
            method: DataAccessType.GET,
            headers: {
                'Content-Type': 'application/json',
                authorization: `${auth.token_type} ${auth.access_token}`,
            },
        }
    );

    return response?.json();
};