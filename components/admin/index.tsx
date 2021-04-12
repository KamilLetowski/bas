import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as Styled from './styles';

const Admin: React.FC = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpandedChange = () => {
    setIsExpanded(state => !state);
  }

  return <Styled.Wrapper isExpanded={isExpanded}>
    <Styled.ButtonGroup>
      <Styled.ExpandButton isExpanded={isExpanded} onClick={handleExpandedChange}>
        <FontAwesomeIcon icon={['fas', 'chevron-left']} />
      </Styled.ExpandButton>
    </Styled.ButtonGroup>
    <Styled.Content isExpanded={isExpanded}>
      {children}
    </Styled.Content>
  </Styled.Wrapper>
};

export default Admin;