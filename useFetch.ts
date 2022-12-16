import { useContext } from 'react';
import { ServicesContext } from './ServicesProvider';
import { FetchFunction } from './schema';

export const useFetch = (): FetchFunction => {
    const { fetch } = useContext(ServicesContext);

    return fetch;
};