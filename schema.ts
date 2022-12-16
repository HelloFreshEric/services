import type {
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';
import RequestIds from './RequestIds';

type AutorizationParams = {
  token_type?: string;
  access_token?: string;
};

type QueryKey<TParams> = (RequestIds | TParams)[];

type LocalizeParams = {
  systemCountry: SystemCountry;
  locale: Locales;
}

export enum DataAccessType {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

export type DataAccess<
  DataAccessType,
  TResult,
  TParams = {},
  TLocalizeParams = LocalizeParams
> = (
  params: TParams & TLocalizeParams & AutorizationParams,
  fetch?: (path: string, options: { method: DataAccessType, headers?: object, body?: string }) => Promise<Response | null>
) => Promise<TResult>;

export type UseMutation<TResult, TParams = {}, TError = Error> = (
  options?: UseMutationOptions<TResult, TError, TParams>
) => UseMutationResult<TResult, Error, TParams, unknown>;

export type UseQuery<TResult, TParams = {}> = (
  params: TParams,
  options?: UseQueryOptions<TResult>
) => UseQueryResult<TResult>;
