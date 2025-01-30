import Link from "./../Link/Link";
import PropTypes from "prop-types";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = ({ routes }) => {
  // State hook for menu button click
  const [menuClick, setMenuClick] = useState(false);

  const toggleMenu = () => {
    setMenuClick(!menuClick);
  };

  return (
    <div className="flex flex-col md:flex-row items-center w-full">
      {/* Menu button toggle (visible only on small screens) */}
      <div
        onClick={toggleMenu}
        className="md:hidden flex items-center hover:cursor-pointer p-2"
      >
        {menuClick ? (
          <AiOutlineClose className="text-xl" />
        ) : (
          <AiOutlineMenu className="text-xl" />
        )}
      </div>

      {/* Navigation menu */}
      <div className={`md:flex ${menuClick ? "" : "hidden"}`}>
        <ul className="flex flex-col md:flex-row justify-start md:justify-center items-center w-full md:w-auto space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
          {routes.map((route, idx) => (
            <Link key={idx} route={route}></Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default NavBar;
