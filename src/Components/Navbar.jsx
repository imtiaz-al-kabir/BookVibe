import { NavLink } from "react-router";

const Navbar = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/listed-books", label: "Listed Books" },
    { path: "/page-to-read", label: "Page to Read" },
  ];
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks.map((item) => (
                <li>
                  <NavLink to={item.path}>{item.label}</NavLink>{" "}
                </li>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((item) => (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-500 border border-green-500  "
                      : "text-black"
                  }
                  to={item.path}
                >
                  {item.label}
                </NavLink>{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end space-x-5">
          <a className="btn bg-[#23be0a] text-white rounded-lg">Login</a>
          <a className="btn bg-[#59c6d2] text-white rounded-lg">Signup</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
