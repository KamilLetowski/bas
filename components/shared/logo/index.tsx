import Image from 'next/image'

import * as Styled from './styles';

const Logo = () => {
  return <Styled.Wrapper>
    <Image src="/assets/logo.png" width={36} height={24} />
    <Styled.Title>BAS Gaming</Styled.Title>
  </Styled.Wrapper>
};

export default Logo;
