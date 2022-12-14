import type {
  UseMutationOptions,
  UseMutationResult,
} from 'react-query';

type TelemetryParams = {
    parentSpan?: Span;
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
  params: TParams & TLocalizeParams & TelemetryParams,
  queryKey: QueryKey<TParams | TLocalizeParams>,
  fetch?: FetchFunction<Response | NodeResponse>
) => Promise<TResult>;

export type UseMutation<TResult, TParams = {}, TError = Error> = (
    options?: UseMutationOptions<TResult, TError, TParams>
  ) => UseMutationResult<TResult, Error, TParams, unknown>;
  