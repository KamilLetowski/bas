import styled, { css } from 'styled-components';

type Props = {
  direction?: 'row' | 'column';
  maxHeight?: boolean;
};

export const Flex = styled.div<Props>`
  display: flex;

  ${(props) =>
    props.direction === 'column' &&
    css`
      flex-direction: column;
    `}

  ${(props) =>
    props.maxHeight &&
    css`
      flex-direction: column;
      flex: 1;
    `}
`;
