import { ColorVariant } from '@/plugins/theme';

import * as Styled from './styles';

type Props = {
  colorVariant?: ColorVariant;
}

const Spinner: React.FC<Props> = ({ colorVariant = 'dark' }) => {
  return <Styled.Spinner colorVariant={colorVariant} />
};

export default Spinner;
