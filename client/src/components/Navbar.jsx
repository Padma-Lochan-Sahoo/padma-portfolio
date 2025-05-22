import { useState, useEffect } from "react";
import { LINKS } from "../constants";
import { RiCloseFill, RiMenu3Fill } from "@remixicon/react";
import { AnimatePresence, motion } from "framer-motion";

const Navbarnew = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
  };

  const linkVariants = {
    hidden: { 
      opacity: 0, 
      y: -30,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
  };

  const closeButtonVariants = {
    hidden: { 
      opacity: 0, 
      rotate: -90,
      scale: 0
    },
    visible: { 
      opacity: 1, 
      rotate: 0,
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 0.3,
        ease: "easeOut"
      }
    },
  };

  const menuIconVariants = {
    hidden: { 
      opacity: 0, 
      rotate: 90,
      scale: 0
    },
    visible: { 
      opacity: 1, 
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto md:my-2 bg-stone-950/30 p-4 md:rounded-xl backdrop-blur-lg">
        <div className="text-white font-semibold text-lg uppercase">
          <motion.a
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            href="/"
            className="hover:text-stone-300 transition duration-300"
          >
            PADMA LOCHAN SAHOO
          </motion.a>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {LINKS.map((link, index) => (
            <motion.a
              href={link.href}
              key={index}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-white hover:text-stone-300 transition duration-300 relative group"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>

        <div className="md:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white focus:outline-none rounded-md p-2"
            onClick={handleLinkClick}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {!menuOpen && (
              <motion.div
                variants={menuIconVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <RiMenu3Fill className="w-6 h-6 cursor-pointer font-bold" style={{ strokeWidth: 2 }} />
              </motion.div>
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm text-white md:hidden"
          >
            {/* Close button inside mobile menu */}
            <motion.button
              variants={closeButtonVariants}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 text-white focus:outline-none rounded-full p-3 bg-stone-800/50 hover:bg-stone-700/50 transition-colors duration-300 cursor-pointer"
              onClick={handleLinkClick}
              aria-label="Close menu"
            >
              <RiCloseFill className="w-6 h-6 font-bold" style={{ strokeWidth: 2 }} />
            </motion.button>

            <motion.ul 
              variants={containerVariants}
              className="space-y-8 text-center"
            >
              {LINKS.map((link, index) => (
                <motion.li
                  variants={linkVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    color: "#d6d3d1" // stone-300 color
                  }}
                  whileTap={{ scale: 0.95 }}
                  key={index}
                >
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-4xl md:text-5xl hover:text-stone-300 font-semibold uppercase tracking-wide transition-colors duration-300 block py-2"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbarnew;