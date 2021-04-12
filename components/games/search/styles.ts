import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 450px;
  margin: 0 auto;
`;

export const Label = styled.label`
  font-size: 22px;
  color: #fff;
  margin-bottom: 12px;
`;

export const ControlGroup = styled.div`
  display: flex;
`;

export const Input = styled.input`
  padding: 8px 12px;
  font-size: 20px;
  border-radius: 8px 0 0 8px;
  outline: none;
  border: none;
  min-width: 350px;
  line-height: 1.5;
`;

export const Button = styled.button`
  border: none;
  border-radius: 0 8px 8px 0;
  padding: 0 16px;
  cursor: pointer;
  color: ${(props) => props.theme.palette.lightWhite};
  background-color: ${(props) => props.theme.palette.lightDark};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.palette.dark};
  }
`;
