import React from 'react';
import { Control, useController } from 'react-hook-form';
import { KeyboardDatePicker, KeyboardDatePickerProps } from '@material-ui/pickers';

import { ControlProps } from '@/components/controls/types';
import ErrorMessage from '../error-message';

import { Flex } from '@/styles';

type Props = {
  control: Control;
  name: string;
} & ControlProps & Partial<KeyboardDatePickerProps>

const DatePicker = ({
  control, name, label, colorVariant, ...restProps }: Props) => {
  const { field: { ref, ...restField }, fieldState } = useController({
    name,
    control,
    defaultValue: null
  });

  return <Flex direction="column">
    <KeyboardDatePicker
      {...restProps}
      {...restField}
      innerRef={ref}
      disableToolbar
      variant="inline"
      invalidDateMessage=''
      format="dd/MM/yyyy"
      size="small"
      margin="none"
      label={label}
      inputVariant="outlined"
    />
    {fieldState.error && (
      <ErrorMessage>{fieldState.error.message}</ErrorMessage>
    )}
  </Flex>
};

export default DatePicker;
