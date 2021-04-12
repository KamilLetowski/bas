import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import Link from 'next/link';

import { Game as GameType } from '@/services/gameService';

import * as Styled from './styles';

type Props = GameType;

const Game: React.FC<Props> = ({
  averageRate,
  description,
  releaseDate,
  title,
  url,
}) => {
  return (
    <Styled.Wrapper>
      <Styled.ImageSection>
        <Styled.ImageWrapper>
          <Image
            src={url}
            unoptimized
            layout="responsive"
            width="100%"
            height="100%"
          />
        </Styled.ImageWrapper>
        <Styled.Rating value={averageRate} readOnly />
      </Styled.ImageSection>
      <Styled.Content>
        <Styled.Title>
          {title}
        </Styled.Title>
        <Styled.ReleaseDate>
          <FontAwesomeIcon icon={["far", "calendar-alt"]} /> {format(new Date(releaseDate), 'dd/MM/yyyy')}
        </Styled.ReleaseDate>
        <Styled.Description>
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
          {description}
        </Styled.Description>
        <Styled.Categories>
          <Styled.Category>
            KATEGORIA
          </Styled.Category>
        </Styled.Categories>
        <Link href={`/games/${title}`}>
          <Styled.More>
            zobacz więcej  <FontAwesomeIcon icon={["fas", "chevron-right"]} />
          </Styled.More>
        </Link>
      </Styled.Content>
    </Styled.Wrapper >
  );
};

export default Game;
