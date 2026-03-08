import { FiShoppingCart, FiStar, FiUsers } from "react-icons/fi";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoIosPricetags } from "react-icons/io";
import StatCard from "../components/Dashboard/StatCard";
import useAuthContext from "../hooks/useAuthContext";
import { useEffect, useState } from "react";
import Service0 from "../components/Dashboard/Service0";
import apiClient from "../services/api-client";

export default function Dashboard() {
  const {user} = useAuthContext();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      const fetchServices = async () => {
        try {
  
          const tokens = JSON.parse(localStorage.getItem("authTokens"));
  
          const res = await apiClient.get("/seller/dashboard/", {
            headers: {
              Authorization: `JWT ${tokens?.access}`,
            },
          });
  
          setServices(res.data);
  
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchServices();
    }, []);
  
  if (!user) return <p>Loading user...</p>;
  if (loading) return <p>Loading services...</p>;

  // Stats
  const totalServices = services?.length;
  const activeServices = services?.filter(s => s.is_active).length;
  const inactiveServices = totalServices - activeServices;
  const avgPrice =
    (services.reduce((acc, s) => acc + Number(s.price), 0) / totalServices || 0
    ).toFixed(2);

  const statsByRole = {
  Buyer: [
    { icon: MdMiscellaneousServices, title: "Total Services", value: `${totalServices}` },
    { icon: FiShoppingCart, title: "Total Subscriptions", value: `${0}` },
    { icon: FiStar, title: "Average Reviews", value: `${4.8}` },
  ],
  Seller: [
    { icon: MdMiscellaneousServices, title: "Total Services", value: `${totalServices}`  },
    { icon: FiShoppingCart, title: "Active Services", value: `${activeServices}` },
    { icon: FiUsers, title: "Inactive Services", value: `${inactiveServices}` },
    { icon: IoIosPricetags, title: "Average Price", value: `${avgPrice}` },
  ],
  Admin: [
    { icon: MdMiscellaneousServices, title: "Total Services", value: `${totalServices}`  },
    { icon: FiShoppingCart, title: "Active Services", value: `${activeServices}` },
    { icon: FiUsers, title: "Inactive Services", value: `${inactiveServices}` },
    { icon: IoIosPricetags, title: "Average Price", value: `${avgPrice}` },
  ],
};

const stats = statsByRole[user?.role] || [];

return (
  <div>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
    <Service0/>
  </div>
);
  
}
