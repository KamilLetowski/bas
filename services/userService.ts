import userApi from 'api-repository/user';
import { AxiosResponse } from 'axios';

export interface UserRegistration {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirmation: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface UserLoginResponse {
  token: string;
}

class UserService {
  register = async (values: UserRegistration) => {
    const { passwordConfirmation, ...rest } = values;
    return await userApi.register(rest);
  };

  login = async (
    values: UserLogin
  ): Promise<AxiosResponse<UserLoginResponse>> => {
    return await userApi.login(values);
  };

  parseJWTToken = (token: string) => {
    const [, base64Url] = token.split('.');
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  };
}

export default new UserService();
