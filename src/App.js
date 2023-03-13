import { useContext } from "react";
import './App.scss';
import { ThemeContext } from "./components/theme/theme";
import Home from "./pages/home/home"
import Error from "./pages/error/error"
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./components/movieDetail/detail";



function App() {
  const { theme } = useContext(ThemeContext);
  return (
    
    <div className={`App ${theme}`}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<MovieDetail />} />
        <Route path='/*' element={<Error />}></Route>
      </Routes>
    </div>

  );
}

export default App;
