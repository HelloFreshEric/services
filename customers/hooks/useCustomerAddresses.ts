import { useQuery } from 'react-query';
import { CustomerAddresses } from '@hellofresh/types/customers';
import { getCustomerAddresses, GetCustomerAddressesParams } from '../requests/getCustomerAddresses';
import { UseQuery } from '../../schema';
import RequestIds from '../../RequestIds';

export const useCustomerAddresses: UseQuery<CustomerAddresses, GetCustomerAddressesParams> = (params, localizeParams, fetch, auth, options = {}) => {
    const localizedParams = {
        ...params,
        ...localizeParams,
        ...(auth ? auth : {})
    };

    const queryKey = [RequestIds['customer.addresses'], localizedParams];

    return useQuery<CustomerAddresses>(
        queryKey,
        () => getCustomerAddresses(localizedParams, fetch),
        options
    );
};
