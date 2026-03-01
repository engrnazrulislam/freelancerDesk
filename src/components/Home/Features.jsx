import { IoMdTrendingUp } from "react-icons/io";
import { LuCircleDollarSign } from "react-icons/lu";
import { RiFileEditFill } from "react-icons/ri";
import { FaTags } from "react-icons/fa";
import { BsShieldLock } from "react-icons/bs";
import { IoShieldCheckmark } from "react-icons/io5";

const Features = () => {
  const features = [
    {
      icon: <LuCircleDollarSign className="text-blue-400 text-4xl" />,
      title: "No Service Fee",
      description:
        "Start hiring without paying any extra platform charges. Transparent pricing with no hidden costs — pay only for the work you receive.",
    },
    {
      icon: <IoMdTrendingUp className="text-blue-400 text-4xl" />,
      title: "0% Commission for Freelancers",
      description:
        "Keep 100% of your earnings on selected plans. We help freelancers grow faster without cutting into their income.",
    },
    {
      icon: <RiFileEditFill className="text-blue-400 text-4xl" />,
      title: "Free Project Posting",
      description: "Clients can post unlimited projects at no cost and connect with skilled professionals instantly.",
    },
    {
      icon: <IoShieldCheckmark className="text-blue-400 text-4xl" />,
      title: "Secure Payment Protection",
      description:
        "Payments are safely held and released only after successful project completion, ensuring trust for both parties.",
    },
  ];

  return (
    <section className="px-8 py-15">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {feature.icon}
            <h3 className="text-lg font-semibold mt-2">{feature.title}</h3>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
