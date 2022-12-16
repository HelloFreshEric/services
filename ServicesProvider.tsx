import React, { createContext } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { LocalizeParams, AutorizationParams } from './schema';

type ServicesProviderProps = {
    fetch: (path: string, options: { method: string, headers?: object, body?: string }) => Promise<Response | null>;
    localizeParams: LocalizeParams;
    authorizationParams: AutorizationParams;
}

export const ServicesContext = createContext<ServicesProviderProps>();

export const ServicesProvider: React.FC<React.PropsWithChildren<ServicesProviderProps>> = ({ localizeParams, authorizationParams, children }) => {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <ServicesContext.Provider value={{ localizeParams, authorizationParams }} >
                {children}
            </ServicesContext.Provider>
        </QueryClientProvider>
    );
};