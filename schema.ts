import type {
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';

export type AutorizationParams = {
  token_type: string;
  access_token: string;
};

export type LocalizeParams = {
  systemCountry: SystemCountry;
  locale: Locales;
}

export type FetchFunction = (path: string, options: { method: DataAccessType, headers?: object, body?: string }) => Promise<Response | null>;

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
  fetch?: FetchFunction
) => Promise<TResult>;
//#endregion

//#region Hook return types
export type UseMutation<TResult, TParams = {}, TError = Error> = (
  options?: UseMutationOptions<TResult, TError, TParams>
) => UseMutationResult<TResult, Error, TParams, unknown>;

export type UseQuery<TResult, TParams = {}> = (
  params: TParams,
  options?: UseQueryOptions<TResult>
) => UseQueryResult<TResult>;
//#endregion