import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Team from "./components/team/Team";
import Carrer from "./Components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./Components/contact/Contact"
import Footer from "./components/common/footer/Footer";
import Home from "./Components/home/Home";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/carrer" element={<Carrer/>} />
          <Route path="/blogs" element={<Blog/>} />
          <Route path="/contact" component={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
