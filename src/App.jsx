import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotfoundPage from "./pages/NotfoundPage";
import TutorialPage from "./pages/TutorialPage";
import "./assets/style/global.css";
import Nav from "./components/Nav";
import Blogs from "./SubPages/Blogs";
import Tutorials from "./SubPages/Tutorials";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:name" element={<Blogs />} />
          <Route path="/tutorial" element={<TutorialPage />} />
          <Route path="/tutorial/:title" element={<Tutorials />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
