import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Album from './pages/Album';
import Comments from './pages/Comments';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/album" element={<Album/>} />
            <Route path="/comments" element={<Comments/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
