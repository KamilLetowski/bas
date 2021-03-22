import styled from 'styled-components';
import MUIButton from '@material-ui/core/Button';

export const Wrapper = styled.div`
  background-image: url('/assets/games-pubg-playerunknowns-battlegrounds-86443.jpg');
  height: 700px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 0;
  flex-direction: column;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0.75;
    background-color: #333;
    z-index: -1;
  }
`;

export const Title = styled.h1`
  margin: 72px 0 12px;
  color: #ddd;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const SubTitle = styled.h3`
  color: #ddd;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const Button = styled(MUIButton)`
  && {
    color: #ddd;
    border: 1px solid #ddd;
    transition: all 0.3s ease;
    position: absolute;
    bottom: 25%;
    left: 50%;
    transform: translate(-50%, -100%);

    &:hover {
      color: #fff;
      border: 1px solid #fff;
    }
  }
`;
