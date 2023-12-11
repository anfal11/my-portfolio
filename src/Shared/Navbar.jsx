import { NavLink } from "react-router-dom";

const Navbar = () => {
  const nav = (
    <>
      <li>
        <NavLink 
        to='/'
        className={({ isActive }) => (isActive ? "active text-base" : "text-base")}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/projects'
        className={({ isActive }) => (isActive ? "active text-base" : "text-base")}>Projects</NavLink>
      </li>
      <li>
        <NavLink to='/about'
        className={({ isActive }) => (isActive ? "active text-base" : "text-base")}>About</NavLink>
      </li>
      <li>
        <NavLink to='/contact'
        className={({ isActive }) => (isActive ? "active text-base" : "text-base")}>Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white sticky z-40 max-w-[1520px] mx-auto top-0 pt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 gap-2"
          >
            {nav}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl">Anfal.Code</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{nav}</ul>
      </div>
    </div>
  );
};

export default Navbar;
