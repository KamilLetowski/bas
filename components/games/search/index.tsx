import React from 'react';

import * as Styled from './styles';

const Search = () => {
  return <Styled.Wrapper>
    <Styled.Label>Wyszukaj grę</Styled.Label>
    <Styled.ControlGroup>
      <Styled.Input type="text" />
      <Styled.Button>wyszukaj</Styled.Button>
    </Styled.ControlGroup>
  </Styled.Wrapper>
};

export default Search;
