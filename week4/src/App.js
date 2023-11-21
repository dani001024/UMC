import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Celebrity from "./pages/Celebrity";
import MoviePage from "./pages/MoviePage";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import TvPage from "./pages/TvPage";


function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
				<Header/>
        <Routes>
          <Route/>       
          <Route path="/" element={<Home/>} />
          <Route path="/tv" element={ <TvPage/> } />
          <Route path="/movie" element={ <MoviePage /> } />
          <Route path="/celebrity" element={ <Celebrity /> } />
          <Route path="/movie/:title" element={<MovieDetail/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
