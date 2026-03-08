import { Route, Routes } from "react-router";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";
import ActivateAccount from "../components/Registration/ActivateAccount";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Profile";
import AddService from "../pages/AddService";
import AddCategory from "../pages/AddCategory";
import Categories from "../pages/Categories";
import AllServices from "../pages/AllServices";
import Community from "../pages/Community";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes  */}

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="activate/:uid/:token" element={<ActivateAccount />} />
        <Route path="services" element={<AllServices/>} />
        <Route path="categories" element={<Categories/>} />
        <Route path="community" element={<Community/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="contact" element={<Contact/>} />
      </Route>
      {/* Private Routes  */}
      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="services/add" element={<AddService />} />
        <Route path="category/add" element={<AddCategory/>} />
        <Route path="categories" element={<Categories/>} />
        <Route path="services" element={<AllServices/>} />
    </Route>
    </Routes>
  );
};

export default AppRoutes;
