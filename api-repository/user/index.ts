import httpService from '@/services/httpService';
import { UserLogin } from '@/services/userService';

interface UserRegistrationDTO {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

const userApi = {
  register: (values: UserRegistrationDTO) => {
    return httpService.post('/api/register', values);
  },
  login: (values: UserLogin) => {
    return httpService.post('/api/authenticate', values);
  },
};

export default userApi;
