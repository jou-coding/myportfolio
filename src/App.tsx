import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/about";
import Works from "./pages/Works";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </main>

      <footer>
        <div>
          <a href="/">About</a>
          <a href="/works">Works</a>
          <a href="/contact">Contact</a>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
