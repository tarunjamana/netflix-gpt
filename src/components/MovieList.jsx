import MovieCard from "./MovieCard"


const MovieList = ({title, movies}) => {
  // Early return if movies is null or undefined
  if (!movies) return null;

  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies
            .filter(movie => movie.poster_path) // Filter out movies without posters
            .map(movie => (
              <MovieCard key={movie.id} posterPath={movie.poster_path}/>
            ))
          }
        </div>
      </div>    
    </div>
  );
};

export default MovieList