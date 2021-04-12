import { useRouter } from 'next/router';
import { useCallback, useReducer } from 'react';

import reducer from './reducer';
import { State } from './UserProvider';

const useState = () => {
  const [state, dispatch] = useReducer(reducer, { userId: -1 } as State);
  const router = useRouter();

  const setUserData = useCallback((data: { UserId: number }) => {
    dispatch({
      type: 'SET_USER_DATA',
      payload: {
        userId: data.UserId,
      },
    });
  }, []);

  const redirectAfterLogin = () => {
    router.push('/games');
  };

  const logout = () => {
    setUserData({
      UserId: -1,
    });
  };

  return {
    state,
    setUserData,
    redirectAfterLogin,
    logout,
  };
};

export default useState;
