import { useCallback, useEffect, useReducer } from 'react';

import gameService, {
	Filters,
	Game,
	GameResponse,
	Rate,
} from '@/services/gameService';
import toastService from '@/services/toastService';
import reducer from './reducer';
import { State } from '.';
import { useRequestStatusContext } from '../request-status';

const useState = () => {
	const { setPending, setResolved } = useRequestStatusContext();
	const [state, dispatch] = useReducer(reducer, {
		count: 0,
		data: [],
		pageIndex: 0,
		categories: [],
		filters: {},
		suggestions: [],
		userMarks: [],
	} as State);

	const setGamesResponse = useCallback((response: GameResponse) => {
		dispatch({
			type: 'SET_GAME_RESPONSE',
			payload: response,
		});
	}, []);

	const fetchGames = useCallback(
		async (filters?: Filters) => {
			setPending('fetchGames');
			const { data } = await gameService.fetch(filters);
			setResolved('fetchGames');
			setGamesResponse(data);
		},
		[setPending, setResolved, setGamesResponse]
	);

	const initFetchCategories = useCallback(async () => {
		setPending('fetchCategories');
		const { data } = await gameService.fetchCategories();
		dispatch({
			type: 'SET_CATEGORIES',
			payload: data,
		});
		setResolved('fetchCategories');
	}, [setPending, setResolved]);

	const setFilters = useCallback((filters: Filters) => {
		dispatch({
			type: 'SET_FILTERS',
			payload: filters,
		});
	}, []);

	const setGame = useCallback((game: Game) => {
		dispatch({
			type: 'SET_GAME',
			payload: game,
		});
	}, []);

	const addNewRate = useCallback(
		async (gameId: number, rate: Rate) => {
			try {
				setPending('addNewRate');
				await gameService.addRate(gameId, rate);
				dispatch({
					type: 'SET_RATE',
					payload: rate,
				});
				toastService.success('Komentarz został dodany pomyślnie');
				setResolved('addNewRate');
			} catch (error) {
				toastService.success('Komentarz nie został dodany pomyślnie');
			}
		},
		[setPending, setResolved]
	);

	const fetchSuggestions = useCallback(async () => {
		setPending('fetchSuggestions');
		const { data } = await gameService.fetchSuggestions();
		dispatch({
			type: 'SET_SUGGESTIONS',
			payload: data as any,
		});
		setResolved('fetchSuggestions');
	}, [setPending, setResolved]);

	const fetchUserMarks = useCallback(async () => {
		setPending('fetchUserMarks');
		const { data } = await gameService.fetchUserMarks();
		dispatch({
			type: 'SET_USER_MARKS',
			payload: data as any,
		});
		setResolved('fetchUserMarks');
	}, [setPending, setResolved]);

	useEffect(() => {
		initFetchCategories();
	}, [initFetchCategories]);

	return {
		state,
		setGamesResponse,
		addNewRate,
		fetchGames,
		initFetchCategories,
		setFilters,
		setGame,
		fetchSuggestions,
		fetchUserMarks,
	};
};

export default useState;
