import { useQuery } from 'react-query';
import { CustomerAddresses } from '@hellofresh/types/customers';
import RequestIds from './RequestIds';
import { getCustomerAddresses, GetCustomerAddressesParams } from '../requests/getCustomerAddresses';
import { UseQuery } from '../../schema';

export const useCustomerAddresses: UseQuery<CustomerAddresses, GetCustomerAddressesParams> = (params = {}, options = {}) => {
    const localizeParams = useLocalizeParams();
    const { fetch } = useFetch();

    const localizedParams = {
        ...params,
        ...localizeParams,
    };

    const queryKey = [RequestIds['customer.addresses'], localizedParams];

    return useQuery<CustomerAddresses>(
        queryKey,
        () => getCustomerAddresses(localizedParams, fetch),
        options
    );
};
