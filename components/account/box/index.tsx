import { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import FormCard from '../form-card';

import LoginForm from '../login-form';
import RegistrationForm from '../registration-form';

import * as Styled from './styles';

type FormType = 'login' | 'registration';

const Box = () => {
  const [formType, setFormType] = useState<FormType>('login');

  const handleSetLoginForm = () => {
    setFormType('login');
  };

  const handleSetRegistrationForm = () => {
    setFormType('registration');
  };

  return (
    <Styled.Wrapper>
      <Styled.FormWrapper>
        <Styled.FormContent>
          <SwitchTransition mode="out-in">
            <CSSTransition
              classNames="alert"
              in={formType === 'login'}
              timeout={300}
              key={formType}
              unmountOnExit
            >
              {formType === 'login' ? (
                <FormCard
                  onSwapClick={handleSetRegistrationForm}
                  swapLabel="Nie masz jeszcze konta? Załóż je już teraz!"
                  title="Dołącz do tysięcy użytkowników!"
                >
                  <LoginForm />
                </FormCard>
              ) : (
                <FormCard
                  title="Stwórz swoje własne konto!"
                  onSwapClick={handleSetLoginForm}
                  swapLabel="Posiadasz już konto? Zaloguj się!"
                >
                  <RegistrationForm />
                </FormCard>
              )}
            </CSSTransition>
          </SwitchTransition>
        </Styled.FormContent>
      </Styled.FormWrapper>
    </Styled.Wrapper>
  );
};

export default Box;
