import { Routes, Route } from 'react-router-dom';
import {  QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from './pages/Home/Home';
import About from './pages/About/About';

import './assets/styles/main.scss';
import Attractions from './pages/Attractions/Attractions';

const queryClient = new QueryClient()


function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/attractions" element={<Attractions />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
