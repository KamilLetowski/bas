import { Grid } from '@material-ui/core';
import { Game as GameType } from '@/services/gameService';
import Game from './game';
import { ResponsiveContainer } from '@/styles';
import SpinnerControl from '../shared/spinner-control';
import { useRequestStatusContext } from '@/providers/request-status';

type Props = {
  games: GameType[];
};

const Games: React.FC<Props> = ({ games }) => {
  const { state } = useRequestStatusContext();

  return (
    <ResponsiveContainer>
      <SpinnerControl isLoading={state.refetchGames === 'PENDING'}>
        <Grid container spacing={3}>
          {games.map((game) => (
            <Grid item md={6} key={game.title}>
              <Game {...game} />
            </Grid>
          ))}
        </Grid>
      </SpinnerControl>
    </ResponsiveContainer>
  );
};

export default Games;
