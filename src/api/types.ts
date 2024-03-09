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

export interface IUser {
  name: string;
  phone: string;
  parentNumber: string;
  region: string;
  dateOfBirth: string;
  purchasedCourses: string[];
  pickedCourses: string[];
  affilateSource: string;
  progress: {
    courseId: String;
    classId: String;
    progress: {
      videoId: String;
      progress: Number | String;
      testResult: Number;
    }[];
  }[];
}