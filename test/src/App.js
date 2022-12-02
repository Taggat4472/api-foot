import "./assets/css/App.css";
import { HashRouter, Route, Routes } from "react-router-dom";

// Import Pages
import Home from "./pages/HomePage"
import Countries from "./pages/CountriesPage"
import Article from "./pages/ArticlePage"
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
        <Route path="/Article" exact element={<Article/>} />
        <Route path="/Foot" exact element={<Foot/>} />
        <Route path="/Admin" exact element={<Admin/>} />
        <Route element={ NotFound } />
      </Routes>
    </HashRouter>
  );
}

export default App;
