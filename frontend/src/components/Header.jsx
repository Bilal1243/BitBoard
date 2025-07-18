import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const Header = ({active}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white px-6 py-4 flex items-center justify-between shadow-md">
      <div className="text-2xl font-bold">
        DEEP NET <span className="text-yellow-400">SOFT</span>
      </div>

      <button
        className="md:hidden text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className="hidden md:flex space-x-6 text-sm font-medium">
        <Link to="/" className={`hover:text-yellow-400 ${active == 'Home' && 'text-red-600'}`}>
          HOME
        </Link>
        <Link to="/menu" className={`hover:text-yellow-400 ${active == 'Menu' && 'text-red-600'}`}>
          MENU
        </Link>
        <Link to="/reservation" className="hover:text-yellow-400">
          MAKE A RESERVATION
        </Link>
        <Link to="/contact" className="hover:text-yellow-400">
          CONTACT US
        </Link>
        <Link to="/addMenu" className="hover:text-yellow-400">
          Add Menu
        </Link>
      </nav>

      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-center flex flex-col items-center space-y-4 py-4 md:hidden z-50 shadow-md">
          <Link
            to="/"
            className="hover:text-yellow-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="/menu"
            className="hover:text-yellow-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            MENU
          </Link>
          <Link
            to="/reservation"
            className="hover:text-yellow-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            MAKE A RESERVATION
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            CONTACT US
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
