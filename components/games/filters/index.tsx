import gameService from '@/services/gameService';
import React, { useState } from 'react';

import * as Styled from './styles';

const Filters = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandedChange = () => {
    setIsExpanded((state) => !state);
  };

  return (
    <Styled.Wrapper>
      <Styled.Expand onClick={handleExpandedChange}>
        Zaawansowane wyszukiwanie
      </Styled.Expand>
      {isExpanded && <Styled.Content>advanced</Styled.Content>}
    </Styled.Wrapper>
  );
};

export default Filters;
