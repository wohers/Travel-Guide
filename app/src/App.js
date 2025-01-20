// App.js
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Attractions from './pages/Attractions/Attractions';
import ArticleDetails from './pages/ArticleDetails/ArticleDetails'; 

import './assets/styles/main.scss';


const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route
            path="/attractions/:id"
            element={<ArticleDetails apiUrl="https://67322e8b2a1b1a4ae10f29a6.mockapi.io/guide/v1/articles" />}
          />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;