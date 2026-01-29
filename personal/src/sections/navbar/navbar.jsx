import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import { useState,useEffect } from "react";

const Navbar = () => {
  const [sun, setSun] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sun) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [sun]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-gray-100 px-6 md:px-10 py-5 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-black">
        
        <div className="text-2xl font-bold">
          <h1>RR</h1>
        </div>

        <ul className={`
          ${isOpen ? "flex" : "hidden"} 
          flex-col md:flex md:flex-row 
          absolute md:static 
          top-full left-0 w-full md:w-auto 
          bg-white md:bg-transparent 
          p-10 md:p-0 gap-8 font-medium 
          shadow-lg md:shadow-none border-b md:border-none
        `}>
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <Link 
                to={navLink.id} 
                className="hover:text-yellow-500 transition-colors"
                onClick={() => setIsOpen(false)} 
              >
                {navLink.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* 3. O'NG TOMON (Tugmalar va Burger) */}
        <div className="flex items-center gap-3">
          {/* Har doim ko'rinadigan Quyosh tugmasi */}
          <button 
            className="text-xl p-2 hover:bg-gray-100 rounded-full transition-all" 
            onClick={() => setSun(!sun)}
          >
            {sun ? "🌙" : "☀️"}
          </button>

          {/* Faqat kompyuterda ko'rinadigan Download CV */}
          <button className="hidden md:block bg-black text-white px-5 py-2 rounded-lg text-sm hover:bg-gray-800 transition-all">
            Download CV
          </button>

          {/* Faqat mobilda ko'rinadigan Burger */}
          <button 
            className="md:hidden block text-3xl p-1" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;