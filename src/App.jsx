import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Housing from './pages/Housing/Housing';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Page d'accueil */}
        <Route path="/about" element={<About />} /> {/* Page about */}
        <Route path="/housing/:id" element={<Housing />} /> {/* Logement */}
        <Route path="*" element={<NotFound />} /> {/* Page 404 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
