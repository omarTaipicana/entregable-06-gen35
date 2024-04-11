import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import useResponse from "../../hooks/useResponse";
import { getHotelsThunk } from "../../store/states/hotels.slice";

const CategoryFilter = () => {
  const url = "https://hotels-api.academlo.tech/cities";
  const [cities, getCities] = useResponse(url);

  useEffect(() => {
    getCities();
  }, []);

  // console.log(cities);
  const dispatch = useDispatch();
  const handleFilterCity = (id) => {
    let url = "";
    if (id) {
      url = `https://hotels-api.academlo.tech/hotels?cityId=${id}`;
    } else {
      url = `https://hotels-api.academlo.tech/hotels`;
    }

    dispatch(getHotelsThunk(url));
  };

  // console.log(cities)
  return (
    <section >
      <h3>Cities</h3>
      <ul className="filter__category">
        <li className="li__category" onClick={() => handleFilterCity()}>All Cities</li>
        {cities?.map((city) => (
          <li className="li__category" onClick={() => handleFilterCity(city.id)} key={city.id}>
            {city.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategoryFilter;
