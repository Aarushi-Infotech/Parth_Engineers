import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Machinery from './pages/Machinery';
import Quality from './pages/Quality';
import Industries from './pages/Industries';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-body">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="machinery" element={<Machinery />} />
          <Route path="quality" element={<Quality />} />
          <Route path="industries" element={<Industries />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
