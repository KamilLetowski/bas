import * as Styled from './styles';

type Props = {
  submitBtnLabel: string;
  onSubmit: (values) => void
};

const BaseForm: React.FC<Props> = ({ children, submitBtnLabel, onSubmit }) => {
  return (
    <Styled.Form role="form" onSubmit={onSubmit}>
      {children}
      <Styled.SubmitBtn colorVariant="white" type="submit" variant="outlined">
        {submitBtnLabel}
      </Styled.SubmitBtn>
    </Styled.Form>
  );
};

export default BaseForm;
