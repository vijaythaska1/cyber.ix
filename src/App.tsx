import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Layout from './components/layout/Layout';
import Services from './pages/Services/Services';
import GetStarted from './pages/GetStarted/GetSarted';
import WatchDemo from './pages/WatchDemo/WatchDemo';
import Portfolio from './pages/Portfolio/Portfolio';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Privacy from './pages/CMS/Privacy';



function App() {
  return (
    <Suspense fallback={<div className="h-screen flex justify-center items-center text-xl">Loading...</div>}>
      <Routes>
        <Route path="/privacy" element={<Privacy />} />

        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/WatchDemo" element={<WatchDemo />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
