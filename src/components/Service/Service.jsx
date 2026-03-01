import { useEffect, useState } from "react";
import ServiceItem from "./ServiceItem";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import ErroAlert from "../ErroAlert";
import apiClient from "../../services/api-client";

const Service = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/services/")
      .then((res) => setServices(res.data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="py-12 px-2 max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-2 md:px-8 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold">Trending Services</h2>
          <a
            href="#"
            className="btn btn-ghost px-6 py-6 rounded-full text-lg"
          >
            View All
          </a>
        </div>
        {/* Spinner  */}
        {isLoading && (
          <div className="flex justify-center items-center py-10">
            <span className="loading loading-spinner loading-xl text-secondary"></span>
          </div>
        )}

        {error && <ErroAlert error={error} />}
        {/* Product Slider  */}
        {!isLoading && !error && services?.length > 0 && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            className="mt-4 px-4 container"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id} className="flex justify-center">
                <ServiceItem key={service.id} product={service} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {!isLoading && !error && services?.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            No Services Available
          </p>
        )}
      </div>
    </section>
  );
};

export default Service;
