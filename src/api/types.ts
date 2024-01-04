export interface ILoginRequest {
  phone: string;
}

export interface IAuthResponse {
  access_token: string;
  refresh_token: string;
}

export interface IRegisterRequest {}

export interface IVerifyRequest {
  otp: string | number;
  phone: string;
}
