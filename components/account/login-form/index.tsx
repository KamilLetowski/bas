import { useForm } from 'react-hook-form';

import TextField from '@/components/form-controls/text-field';
import useLoading from '@/hooks/useLoading';
import { pipe, pick } from '@/utils/functional';
import toastService from '@/services/toastService';
import userService, {
  UserLoginResponse,
  UserLogin,
} from '@/services/userService';
import SpinnerControl from '@/components/shared/spinner-control';
import { useUserContext } from '@/providers/user';
import BaseForm from '../base-form';

const LoginForm = () => {
  const { control, handleSubmit } = useForm();
  const { isLoading, asyncLoadingChange } = useLoading();
  const { setUserData, redirectAfterLogin } = useUserContext();

  const submitForm = async (values: UserLogin) => {
    try {
      const { data } = await asyncLoadingChange(() =>
        userService.login(values)
      );
      pipe(
        pick<UserLoginResponse>('token'),
        userService.parseJWTToken,
        setUserData,
        redirectAfterLogin
      )(data);
    } catch (error) {
      toastService.error('Błąd podczas logowania. Spróbuj ponownie później');
    }
  };

  return (
    <SpinnerControl isLoading={isLoading} colorVariant="white">
      <BaseForm onSubmit={handleSubmit(submitForm)} submitBtnLabel="zaloguj">
        <TextField
          control={control}
          name="username"
          label="Nazwa użytkownika"
          colorVariant="white"
        />
        <TextField
          control={control}
          name="password"
          label="Hasło"
          type="password"
          colorVariant="white"
        />
      </BaseForm>
    </SpinnerControl>
  );
};

export default LoginForm;
