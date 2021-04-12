import { Action, State } from '.';

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case 'SET_GAME_RESPONSE': {
			return {
				...state,
				...action.payload,
			};
		}
		default:
			throw new Error(
				`Unhandled action type (${action.type}) in reducer: Game`
			);
	}
};

export default reducer;
