import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Works from "./pages/Works";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Jou-coding</h1>

        <nav>
          <ol>
            <li>
              <Link to="/">about</Link>
            </li>
            <li>
              <Link to="works">works</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ol>
        </nav>
      </header>
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
