import { IMG_CDN } from "../utils/constants";

const MovieCard = ({posterPath}) => {
  // Skip rendering if no poster path
  if (!posterPath) return null;

  return (
    <div className="w-48 pr-4">
      <div className="aspect-[2/3] overflow-hidden rounded-lg">
        <img 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          src={IMG_CDN + posterPath} 
          alt="movie-card"
        />
      </div>
    </div>
  );
};

export default MovieCard;
