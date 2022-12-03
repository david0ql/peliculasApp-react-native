import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isloading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying:[],
    popular:[],
    topRated:[],
    upcoming: []
  });

  const getMovies = async () => {
    const nowPlayingPromise = movieDB.get<MovieDBNowPlaying>('/now_playing');
    const popularPromise = movieDB.get<MovieDBNowPlaying>('/popular');
    const topRatedPromise = movieDB.get<MovieDBNowPlaying>('/top_rated');
    const upcoming = movieDB.get<MovieDBNowPlaying>('/upcoming');

    const response = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcoming,
    ]);

    setMoviesState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return {
    ...moviesState,
    isloading,
  };
};
