import { Grid } from '@material-ui/core';
import { Game as GameType } from '@/services/gameService';
import { ResponsiveContainer } from '@/styles';
import { useRequestStatusContext } from '@/providers/request-status';
import Game from './game';
import SpinnerControl from '../shared/spinner-control';

type Props = {
	games: GameType[];
};

const Games: React.FC<Props> = ({ games }) => {
	const { state } = useRequestStatusContext();

	return (
		<ResponsiveContainer>
			<SpinnerControl isLoading={state.fetchGames === 'PENDING'}>
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
