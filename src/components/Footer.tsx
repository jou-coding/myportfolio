import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex w-full justify-center   ">
      <div className="flex justify-between p-8">
        <nav>
          <ul className="flex gap-10 ">
            <li className="hover:underline font-bold">
              <Link to="/">about</Link>
            </li>
            <li className="hover:underline font-bold">
              <Link to="/works">works</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
