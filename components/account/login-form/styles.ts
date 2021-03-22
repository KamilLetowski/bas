import styled from 'styled-components';
import Text from '@/components/controls/text-field';
import { Button as Btn } from '@material-ui/core';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 12px 0;
  width: 100%;
`;

export const TextField = styled(Text)`
  .MuiInputBase-root {
    color: #fff;
    border-color: #ddd !important;
    margin-bottom: 16px;
  }

  .MuiInputLabel-formControl {
    color: #ddd !important;
  }

  fieldset {
    border-color: #ddd !important;
  }
`;

export const Button = styled(Btn)`
  && {
    margin-top: 16px;
    border-color: #ddd !important;
    color: #ddd !important;
  }
`;
