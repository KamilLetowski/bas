import Link from './link';

import Logo from '../shared/logo';

import * as Styled from './styles';

const links = [
  { href: '/games', children: 'Gry' },
  { href: '/account', children: 'Konto' },
];

const TopNav = () => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Link href='/' activeClassName="" className="">
          <Logo />
        </Link>
        <Styled.Links>
          {links.map(({ href, children }) => (
            <Link key={href} href={href}>
              {children}
            </Link>
          ))}
        </Styled.Links>
      </Styled.Header>
    </Styled.Wrapper>
  );
};

export default TopNav;
