import { useRouter } from 'next/router';

const Game = () => {
  const { query } = useRouter()

  return <div>{query.id}</div>
};

export default Game;
