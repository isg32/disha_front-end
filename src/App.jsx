import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import Importantlinks from './pages/Importantlinks';

function App() {
  
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/importantlinks" element={<Importantlinks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
