import { FiMenu, FiX } from "react-icons/fi";
import { Link, Navigate } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";

const Navbar = ({ sidebarOpen }) => {
  const { user, logoutUser } = useAuthContext();
  return (
    <div className="navbar bg-base-100 border-b">
      <div className="flex-none lg:hidden">
        <label htmlFor="drawer-toggle" className="btn btn-square btn-ghost">
          {sidebarOpen ? (
            <FiX className="h-5 w-5" />
          ) : (
            <FiMenu className="h-5 w-5" />
          )}
        </label>
      </div>
      <div className="flex-1">
        <h2 className="text-lg font-semibold">Dashboard</h2>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div className="flex justify-between items-center gap-2">
          <h2 className="font-semibold">{user.first_name} {user.last_name}</h2>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User Avatar"
                 src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </label>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/" onClick={logoutUser}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
