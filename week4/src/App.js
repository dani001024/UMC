import Movie from "./components/Movie/Movie";
import { movies } from "./movieDummy";
import "./App.css";
function App() {
  return (
    <div className="App" style={{backgroundColor : "#0B173B"}}>
     <div className="app-container">
        {
          movies.results.map((item) => {
            return (
              <Movie
              key = {item.id} 
              poster_path = {item.poster_path}
              title= {item.title}
              overview = {item.overview}
              vote_average = {item.vote_average}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
