import styled from 'styled-components';
import { ResponsiveContainer } from '@/styles';

export const Wrapper = styled(ResponsiveContainer)`
  margin-bottom: 32px;
  flex-direction: column;
  width: 100%;
`;

export const Expand = styled.span`
  padding: 8px 4px;
  text-decoration: underline;
  cursor: pointer;
`;

export const Content = styled.div`
  background-color: #ccc;
`;
