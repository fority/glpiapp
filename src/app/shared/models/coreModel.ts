export interface BaseResponseWithData<T> {
  Success: boolean;
  Message: string;
  Data: T;
}
export interface BaseResponse {
  Success: boolean;
  Message: string;
}

export enum MessageBoxType {
  OKOnly,
  YesNo,
}

export interface AppEventMsg {
  Action: String;
  Data: any;
}

export interface PagingContent<T> {
  TotalElements: number;
  Content: T[];
}
export interface SelectOption {
  value: string;
  label: string;
}
