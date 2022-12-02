import "./assets/css/App.css";
import { HashRouter, Route, Routes } from "react-router-dom";

// Import Pages
import Home from "./pages/HomePage"
import Countries from "./pages/CountriesPage"
import Buteur from "./pages/Topscorer"
import Foot from "./pages/FootPage"
import Admin from "./pages/AdminPage"
import NotFound from "./pages/NotFoundPage"

// BrowserRouter
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/Countries" exact element={<Countries/>} />
        <Route path="/Meilleur buteur" exact element={<Buteur/>} />
        <Route path="/Foot" exact element={<Foot/>} />
        <Route path="/Admin" exact element={<Admin/>} />
        <Route element={ NotFound } />
      </Routes>
    </HashRouter>
  );
}

export default App;
