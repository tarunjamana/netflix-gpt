import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";



const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
    <Header/> 
    {/*

     MainContainer
       - Video Background
       - Video Title
     Secondary Container
       - Movie List * N
         - cards * N

  */}
  <MainContainer />
  <SecondaryContainer />
    </div>

  )
}

export default Browse