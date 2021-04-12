import { useCallback, useReducer } from 'react';

import gameService, { GameResponse } from '@/services/gameService';
import reducer from './reducer';
import { State } from '.';
import { useRequestStatusContext } from '../request-status';

const useState = () => {
  const { setPending, setResolved } = useRequestStatusContext();
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    data: [],
    pageIndex: 0,
  } as State);

  const refetchGames = useCallback(async () => {
    setPending('refetchGames');
    // const { data } = await gameService.fetchAll();
    setTimeout(() => {
      setResolved('refetchGames');
    }, 1000);
    // setGamesResponse(data);
  }, []);

  const setGamesResponse = useCallback((response: GameResponse) => {
    dispatch({
      type: 'SET_GAME_RESPONSE',
      payload: response,
    });
  }, []);

  return {
    state,
    setGamesResponse,
    refetchGames,
  };
};

export default useState;
