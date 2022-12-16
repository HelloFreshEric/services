import { CustomerAddresses } from '@hellofresh/types/customers';
import { DataAccess, DataAccessType } from '../../schema';

export type GetCustomerAddressesParams = {
    id?: string;
};

export const getCustomerAddresses: DataAccess<DataAccessType.GET, CustomerAddresses, GetCustomerAddressesParams> = async (
    { id = 'me', token_type, access_token },
    fetch = () => Promise.resolve(null),
) => {
    const response = await fetch(
        `/api/customers/${id}/addresses`,
        {
            method: DataAccessType.GET,
            headers: {
                'Content-Type': 'application/json',
                authorization: `${token_type} ${access_token}`,
            },
        }
    );

    return response?.json();
};