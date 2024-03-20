import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import TvShows from "./components/TvShows.jsx";
import MovieDetails from "./components/MovieDetails.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-dark text-ligh">
        <header>
          <MyNav />
        </header>
        <main>
          <Routes>
            <Route path="/home" element={<Main />} />
            <Route path="/tvshows" element={<TvShows idSearch={"harry potter"} />} />
            <Route path="/details/:idMovie" element={<MovieDetails />} />
          </Routes>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
