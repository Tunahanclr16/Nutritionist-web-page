import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Proces from "./pages/Procces";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact"
import TeamMembers from "./pages/TeamMembers"
import Blog from './pages/Blog';
import TopBar from "./Layout/Topbar";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

const App = () => {
  return (
    <Router>
      <>
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<TeamMembers />} />
          <Route path="/process" element={<Proces />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
};

export default App;
