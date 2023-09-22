import { BaseResponse } from './coreModel';

export interface AuthStateModel {
  Roles: string[] | null;
  Username: string | null;
  IsAuthenticated: boolean;
}

export interface LoginResponse extends BaseResponse {
  Roles: string[];
}

export interface LoginRequest {
  Username: string;
  Password: string;
}

export interface SessionToken {
  session_token: string;
}
