import Footer from "./components/footer";
import Tile from "./components/newsTile";
import Search from "./search";
import {
  Routes, Route, Navigate,
} from 'react-router-dom';



function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Tile />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  
    </div>);
}

export default App;
