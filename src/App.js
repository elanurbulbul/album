import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Album from './pages/Album';
import Comments from './pages/Comment/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import  CommentDetail  from './pages/Comment/CommentDetail';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <div>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/album" element={<Album/>} />
              <Route path="/comments" element={<Comments/>} />
              <Route path="/comments/:id" element={<CommentDetail/>} />         
          </Routes>
        </div>
        <Footer/>
      </Router>
      
    
      
    </div>
  );
}

export default App;
