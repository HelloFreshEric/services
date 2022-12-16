import { useContext } from 'react';
import { ServicesContext } from './ServicesProvider';
import { LocalizeParams } from './schema';

export const useLocalizeParams = (): LocalizeParams => {
    const { localizeParams } = useContext(ServicesContext);

    return localizeParams;
};