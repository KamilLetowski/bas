import { TextFieldProps } from '@material-ui/core/TextField';
import React from 'react';
import { ControlProps } from '../types';

import * as Styled from './styles';

export type Props = ControlProps & Partial<TextFieldProps>;

const TextField = React.forwardRef(({
  label,
  className,
  colorVariant = "dark",
  ...rest
}: Props, ref) => {
  return (
    <Styled.TextField
      variant="outlined"
      innerRef={ref}
      label={label}
      $colorVariant={colorVariant}
      {...rest}
    />
  );
});

export default TextField;
