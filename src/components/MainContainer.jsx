import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBG from "./VideoBG"

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if(movies === null) return;


    const mainMovie = movies[0];


    const {id,original_title,overview} = mainMovie
  return (
    <div>
    <VideoTitle title={original_title} overview={overview} />
    <VideoBG movieId={id}/>
    </div>
  )
}

export default MainContainer