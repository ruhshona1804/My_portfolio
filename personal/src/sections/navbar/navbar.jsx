import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import { useState } from "react";

const Navbar = () => {
    const[sun,setSun]=useState(false)
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-gray-100 px-10 py-5 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-black">
        <div className="text-2xl font-bold">
          <h1>RR</h1>
        </div>

        <ul className="flex gap-8 font-medium">
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <Link to={navLink.id} className="hover:text-yellow-500 transition-colors">
                {navLink.title}
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={()=>setSun(!sun)}>{sun ? "🌙":"☀️"}</button>

        <button className="bg-black text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-800">
          Download CV
        </button>
      </div>
    </nav>
  );
};

export default Navbar;