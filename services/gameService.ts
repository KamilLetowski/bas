import httpService from './httpService';

export interface Game {
  title: string;
  description: string;
  releaseDate: Date;
  url: string;
  averageRate: number;
}

export interface GameResponse {
  count: number;
  pageIndex: number;
  data: Game[];
}

class GameService {
  fetchAll() {
    return httpService.get<GameResponse>('/api/games');
  }
  create(game: Game) {
    return httpService.post<Game>('/api/games', game);
  }
}

export default new GameService();
