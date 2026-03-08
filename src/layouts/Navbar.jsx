import { Link} from "react-router";
import useAuthContext from "../hooks/useAuthContext";

const Navbar = () => {
  const { user, logoutUser } = useAuthContext(); 
  return (
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
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/service">Our Services</Link></li>
            <li><Link to="/">Community</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">FreelancerDesk</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="about">About Us</Link></li>
          <li><Link to="services">Our Services</Link></li>
          <li><Link to="community">Community</Link></li>
          <li><Link to="blog">Blog</Link></li>
          <li><Link to="contact">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div>
            <div className="dropdown dropdown-end mr-4">
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">
                    0 Items
                  </span>
                  <span className="text-info">
                    Subtotal: 0
                  </span>
                  <div className="card-actions">
                    <Link to="dashboard/cart/">
                      <button className="btn btn-primary btn-block">
                        View Service
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                
                <li>
                  <Link to="/" onClick={logoutUser}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
