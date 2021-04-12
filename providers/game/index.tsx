import { GameResponse } from '@/services/gameService';
import ContextBuilder from '../ContextBuilder';
import useState from './useState';

export type Action = { type: 'SET_GAME_RESPONSE'; payload: GameResponse };
export type State = {} & GameResponse;

const builder = new ContextBuilder(useState);
builder.setContext();
builder.setProvider();
export const useGameContext = builder.createHook.bind(builder);
const GameProvider = builder.provider;
export default GameProvider;
