import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Create from './components/Create';
import NavBar from './components/NavBar';
function App() {
  const myDrawerWidth = 220;
  return (
    <div className="App">
      <NavBar 
      drawerWidth={myDrawerWidth} 
      content ={
        <Routes>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/create" element={<Create />} />
     </Routes>
      }
      />
      

 
    </div>
  );
}

export default App;
