import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"
import { BG_IMAGE } from "../utils/constants"

const GptSearch = () => {
  return (
    <div>
    <div className="absolute w-full h-screen -z-10">
        <img
          className="w-full h-screen object-cover"
          src={BG_IMAGE}
          alt="background"
        />
      </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch