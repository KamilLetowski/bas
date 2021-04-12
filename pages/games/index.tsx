import GamesList from '@/components/games'
import Search from '@/components/games/search';
import Filters from '@/components/games/filters';
import SearchWallpaper from '@/components/games/search-wallpaper';
import gameService, { GameResponse } from "@/services/gameService";
import { Flex } from '@/styles';
import BasePanel from '@/components/admin/base-panel';
import { useEffect } from 'react';
import { useGameContext } from '@/providers/game';

type Props = GameResponse;

const Games: React.FC<Props> = (props) => {
  const { setGamesResponse, state } = useGameContext();

  useEffect(() => {
    setGamesResponse(props);
  }, []);

  return <Flex maxHeight>
    <BasePanel />
    <SearchWallpaper>
      <Search />
    </SearchWallpaper>
    <Filters />
    <GamesList games={state.data} />
  </Flex>
};

export async function getServerSideProps() {
  // const { data } = await gameService.fetchAll();
  return {
    props: {
      data: [],
    },
  }
}

export default Games;
