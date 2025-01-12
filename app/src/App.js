import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import './assets/styles/main.scss'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
