import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
export const DropMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu size={30} color="white"/>
      </button>
      {isOpen && (
        <div className="absolute right-5 mt-2 w-48 border border-white">
          <a href="#" className="block px-4 py-2 text-white">
            Home
          </a>
          <a href="#" className="block px-4 py-2 text-white">
            Sobre
          </a>
          <a href="#" className="block px-4 py-2 text-white">
            Contato
          </a>
        </div>
      )}
    </div>
  );
};
