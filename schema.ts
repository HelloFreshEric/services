import type {
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';

type AutorizationParams = {
  token_type: string;
  access_token: string;
};

type LocalizeParams = {
  systemCountry: SystemCountry;
  locale: Locales;
}

//#region Request method types
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
  params: TParams & TLocalizeParams & { auth?: AutorizationParams },
  fetch?: (path: string, options: { method: DataAccessType, headers?: object, body?: string }) => Promise<Response | null>
) => Promise<TResult>;
//#endregion

//#region Hook return types
export type UseMutation<TResult, TParams = {}, TError = Error> = (
  localizeParams: LocalizeParams,
  fetch: (path: string, options: { method: DataAccessType, headers?: object, body?: string }) => Promise<Response | null>,
  auth?: AutorizationParams,
  options?: UseMutationOptions<TResult, TError, TParams>
) => UseMutationResult<TResult, Error, TParams, unknown>;

export type UseQuery<TResult, TParams = {}> = (
  params: TParams,
  localizeParams: LocalizeParams,
  fetch: (path: string, options: { method: DataAccessType, headers?: object, body?: string }) => Promise<Response | null>,
  auth?: AutorizationParams,
  options?: UseQueryOptions<TResult>
) => UseQueryResult<TResult>;
//#endregion