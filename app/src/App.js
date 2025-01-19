// App.js
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Attractions from './pages/Attractions/Attractions';
import ArticleDetails from './pages/ArticleDetails/ArticleDetails'; // Новый компонент для деталей статьи

import './assets/styles/main.scss';

// Создаем экземпляр QueryClient для управления кэшем
const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      {/* Обеспечиваем доступ к QueryClient для всех дочерних компонентов */}
      <QueryClientProvider client={queryClient}>
        <Routes>
          {/* Главная страница */}
          <Route path="/" element={<Home />} />

          {/* Страница "О нас" */}
          <Route path="/about" element={<About />} />

          {/* Страница со списком достопримечательностей */}
          <Route path="/attractions" element={<Attractions />} />

          {/* Динамический маршрут для деталей статьи */}
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