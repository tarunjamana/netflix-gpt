import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies);

  const popularMovies = useSelector(store => store.movies?.popularMovies);

  const topRatedMovies = useSelector(store => store.movies?.topRatedMovies);

  const upcomingMovies = useSelector(store => store.movies?.upcomingMovies);

  // Early return if movies data isn't loaded yet
  if (!nowPlayingMovies || !popularMovies || !topRatedMovies) return null;

  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-52 pl-4 relative z-20">
        <MovieList title="Now Playing" movies={nowPlayingMovies} />
        <MovieList title="Popular Movies" movies={popularMovies} />
        <MovieList title="Top Rated" movies={topRatedMovies} />
        <MovieList title="Upcoming Movies" movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;