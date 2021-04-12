import ContextBuilder from '../ContextBuilder';
import useState from './useState';

export type RequestStatus = 'PENDING' | 'RESOLVED' | 'NONE' | 'ERROR';
type StateKeys = keyof State;
export type Action =
  | { type: 'SET_PENDING'; payload: StateKeys }
  | { type: 'SET_RESOLVED'; payload: StateKeys }
  | { type: 'SET_NONE'; payload: StateKeys }
  | { type: 'SET_ERROR'; payload: StateKeys };
export type State = {
  refetchGames: RequestStatus;
};

const builder = new ContextBuilder(useState);
builder.setContext();
builder.setProvider();
export const useRequestStatusContext = builder.createHook.bind(builder);
const RequestStatusProvider = builder.provider;
export default RequestStatusProvider;
