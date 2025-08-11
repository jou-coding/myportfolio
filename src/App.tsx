import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <h1>Jou-coding</h1>

      <nav>
        <ol>
          <li>
            <Link to="/">about</Link>
          </li>
          <li>works</li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ol>
      </nav>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
