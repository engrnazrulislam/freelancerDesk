import HeroCarousel from "../components/Home/Carousel/HeroCarousel";
import Category from "../components/Home/Categories/Category";
import DiscountSection from "../components/Home/Discount/DiscountSection";
import Features from "../components/Home/Features";
import Service from "../components/Service/Service";

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <Features />
      <Category />
      <Service />
      <DiscountSection />
    </div>
  );
};

export default Home;
