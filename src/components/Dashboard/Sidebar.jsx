import {
  FiBarChart2,
  FiPlusCircle,
  FiShoppingCart,
  FiStar,
  FiTag,
  FiUsers,
} from "react-icons/fi";
import { MdMiscellaneousServices, MdUnsubscribe  } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";

const Sidebar = () => {
  const { user } = useAuthContext();

  const buyerMenus = [
    { to: "/dashboard", icon: FiBarChart2, label: "Dashboard" },
    { to: "/dashboard/services", icon: MdMiscellaneousServices, label: "Choose Services" },
    { to: "", icon: MdUnsubscribe, label: "My Orders" },
    { to: "", icon: FiStar, label: "My Reviews" },
  ];

  const sellerMenus = [
    { to: "/dashboard", icon: FiBarChart2, label: "Dashboard" },
    { to: "/dashboard/categories", icon: BiCategory, label: "View Categories" },
    { to: "/dashboard/category/add", icon: FiPlusCircle, label: "Add Categories"},
    { to: "/dashboard/services", icon: MdMiscellaneousServices, label: "Our Services" },
    { to: "/dashboard/services/add", icon: MdMiscellaneousServices, label: "Add Services" },
    { to: "", icon: MdUnsubscribe, label: "View Orders" },
    { to: "", icon: FiStar, label: "View Reviews" },
  ];

  const adminMenues = [
    { to: "/dashboard", icon: FiBarChart2, label: "Dashboard" },
    { to: "/dashboard/services/add", icon: MdMiscellaneousServices, label: "Add Services" },
    { to: "/dashboard/services", icon: MdMiscellaneousServices, label: "View All Services" },
    { to: "/dashboard/category/add", icon: FiPlusCircle, label: "Add Categories"},
    { to: "/dashboard/categories", icon: BiCategory, label: "View All Categories" },
    { to: "", icon: FiShoppingCart, label: "View Orders" },
    { to: "", icon: FiStar, label: "View Reviews" },
    { to: "", icon: FiUsers, label: "Users" },
  ];

  const menuItems = user?.is_staff ? adminMenues : user?.role==="Seller"? sellerMenus : buyerMenus;
  return (
    <div className="drawer-side z-10">
      <label
        htmlFor="drawer-toggle"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <aside className="menu bg-base-200 w-64 min-h-full p-4 text-base-content">
        {/* Sidebar header */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-6 px-2">
            <FiShoppingCart className="h-6 w-6" />
            <h1 className="text-xl font-bold">FreelancerDesk</h1>
          </Link>
        </div>

        {/* Sidebar menu */}
        <ul className="menu menu-md gap-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className="flex items-center">
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Sidebar footer */}
        <div className="mt-auto pt-6 text-xs text-base-content/70">
          © 2025 FreelancerDesk Admin
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
