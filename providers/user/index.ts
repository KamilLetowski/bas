import ContextBuilder from '../ContextBuilder';
import useState from './useState';

export type Action = { type: 'SET_USER_DATA'; payload: State };
export type State = { userId: number };

const builder = new ContextBuilder(useState);
builder.setContext();
builder.setProvider();
export const useUserContext = builder.createHook.bind(builder);
const UserProvider = builder.provider;
export default UserProvider;
