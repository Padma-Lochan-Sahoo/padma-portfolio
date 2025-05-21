import { useState } from "react";
import { LINKS } from "../constants";
import { RiCloseFill, RiMenu3Fill } from "@remixicon/react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOPen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 ">
      <div className="flex justify-between items-center max-w-6xl mx-auto md:my-2 bg-stone-950/30 p-4 md:rounded-xl backdrop-blur-lg">
        <div className="text-white font-semibold text-lg uppercase">
          <motion.a
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            href="/"
            className="hover:text-stone-500 transition duration-300"
          >
            PADMA LOCHAN SAHOO
          </motion.a>
        </div>
        <div className="hidden md:flex space-x-8">
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-white hover:text-stone-400 transition duration-300 relative group"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOPen)}
            aria-label={menuOPen ? "Close menu" : "Open menu"}
          >
            {menuOPen ? (
              <RiCloseFill className="w-6 h-6 cursor-pointer" />
            ) : (
              <RiMenu3Fill className="w-6 h-6 cursor-pointer" />
            )}
          </button>
        </div>
      </div>
      {menuOPen && (
        <div className="md:hidden bg-stone-950/30 p-2 rounded-xl backdrop-blur-lg flex flex-col space-y-4 mx-auto max-h-[calc(100vh-80px)] overflow-y-auto">
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              onClick={handleLinkClick}
              className="text-white hover:text-stone-400 transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
