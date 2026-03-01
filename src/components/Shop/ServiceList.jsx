import ServiceItem from "../Service/ServiceItem";

const ServiceList = ({ services, loading }) => {
  if (loading)
    return (
      <div className="flex justify-center items-center py-10 min-h-screen">
        <span className="loading loading-spinner loading-xl text-secondary"></span>
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceItem product={service} key={service.id} />
      ))}
    </div>
  );
};

export default ServiceList;
