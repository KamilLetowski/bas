import { UserLogged } from '@/services/user-service';
import { buildContext } from '../buildContext';
import useState from './useState';

export type Action = { type: 'SET_USER_DATA'; payload: State };
export type State = UserLogged;

const {
	Provider: UserProvider,
	useStateContext: useUserContext,
} = buildContext(useState);

export { UserProvider as default, useUserContext };
