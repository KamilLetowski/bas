import { ColorVariant } from '@/plugins/theme';
import { ButtonProps } from '@material-ui/core';

import * as Styled from './styles';

type Props = {
  colorVariant?: ColorVariant
} & Partial<ButtonProps>

const Button: React.FC<Props> = ({ children, colorVariant = 'dark', ...rest }) => {
  return <Styled.Button {...rest} $colorVariant={colorVariant}>
    {children}
  </Styled.Button>
};

export default Button;
