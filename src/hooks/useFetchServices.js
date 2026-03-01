import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useFetchService = (
  currentPage,
  priceRange,
  selectedCategory,
  searchQuery,
  sortOrder
) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      const url = `/services/?price__gt=${priceRange[0]}&price__lt=${priceRange[1]}&page=${currentPage}&category_id=${selectedCategory}&search=${searchQuery}&ordering=${sortOrder}`;
      try {
        const response = await apiClient.get(url);
        const data = await response.data;

        setServices(data.results);
        setTotalPages(Math.ceil(data.count / data.results.length));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, [currentPage, priceRange, selectedCategory, searchQuery, sortOrder]);

  return { services, loading, totalPages };
};

export default useFetchService;
