
import * as Styled from './styles.ts';

const LoginForm = () => {
  return <Styled.Form>
    <Styled.TextField label="Login" />
    <Styled.TextField label="Hasło" />
    <Styled.Button variant="outlined" color="primary">zaloguj</Styled.Button>
  </Styled.Form>
}

export default LoginForm;