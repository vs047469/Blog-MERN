import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About'
import Article from './Pages/Article';
import ArticlesList from './Pages/ArticlesList';
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className='max-w-screen-md m-auto'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/article/:name" element={<Article/>} />
          <Route path="/articles" element={<ArticlesList/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
