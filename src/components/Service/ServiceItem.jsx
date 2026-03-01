import { Link } from "react-router";
import defaultImage from "../../assets/default_product.jpg";

const ServiceItem = ({ service }) => {
  return (
    <Link to={`/shop/${service.id}`}>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={
              service.images.length > 0 ? service.images[0].image : defaultImage
            }
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{service.name}</h2>
          <h3 className="font-bold text-xl text-red-700">${service.price}</h3>
          <p>{service.description}</p>
          <div className="card-actions mt-1">
            <button className="btn btn-secondary">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceItem;
