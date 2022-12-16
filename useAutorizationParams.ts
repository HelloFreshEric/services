import { useContext } from 'react';
import { ServicesContext } from './ServicesProvider';
import { AutorizationParams } from './schema';

export const useAutorizationParams = (): AutorizationParams => {
    const { AutorizationParams } = useContext(ServicesContext);

    return AutorizationParams;
};