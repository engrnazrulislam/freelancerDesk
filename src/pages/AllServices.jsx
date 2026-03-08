import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { BiCategory } from "react-icons/bi";

const AllServices = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await apiClient.get("services/");
        setServices(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div>
      <h2 className="text-5xl font-bold mb-10 text-center">Our Services</h2>

      <div className="grid auto-cols-max grid-flow-col gap-4 justify-center">

        {services.map(service => (
        <div key={service.id} className="card bg-base-100 w-80 shadow-sm">
          <figure>
            <img
              src={service.images[0]?.image}
              alt={service.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{service.title}</h2>
            <p>Seller: {service.seller?.name}</p>
            <p>{service?.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Subscribe Our Service</button>
            </div>
          </div>
        </div>
        ))}
      </div>
      </div>
  );
};

export default AllServices;