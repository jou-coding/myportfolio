import { Link } from "react-router-dom";

export default function Hedear() {
  return (
    <div className="flex justify-between p-8">
      <h1>Portfolio</h1>
      <nav>
        <ul className="flex gap-5 ">
          <li className="hover:underline">
            <Link to="/">about</Link>
          </li>
          <li className="hover:underline">
            <Link to="/works">works</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
