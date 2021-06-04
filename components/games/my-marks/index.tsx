import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';

import SpinnerControl from '@/components/shared/spinner-control';
import { useRequestStatusContext } from '@/providers/request-status';
import { useGameContext } from '@/providers/game';
import Game from '../game';

const MyMarks = () => {
	const { state } = useRequestStatusContext();
	const { state: gameState, fetchUserMarks } = useGameContext();

	useEffect(() => {
		fetchUserMarks();
	}, [fetchUserMarks]);

	return (
		<SpinnerControl isLoading={state.fetchUserMarks === 'PENDING'}>
			<Grid container spacing={3}>
				{gameState.userMarks.map((game) => (
					<Grid item md={6} key={game.title}>
						<Game {...game} />
					</Grid>
				))}
			</Grid>
		</SpinnerControl>
	);
};

export default MyMarks;
