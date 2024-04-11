import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import HotelCard from "../components/HomePage/HotelCard";
import CategoryFilter from "../components/HomePage/CategoryFilter";
import PriceFilter from "../components/HomePage/PriceFilter";
import "./styles/HomePage.css";

const HomePage = () => {
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity,
  });
  const [inputName, setInputName] = useState("");
  const hotels = useSelector((state) => state.hotels);
  const inputValue = useRef();

  const handleChange = () => {
    setInputName(inputValue.current.value.toLowerCase().trim());
  };

  const cbfilter = (hotelInfo) => {
    const filterName = hotelInfo.name.toLowerCase().includes(inputName);
    const price = Number(hotelInfo.price);
    const filterprice = price >= fromTo.from && price <= fromTo.to;
    return filterName && filterprice;
  };

  return (
    <div className="home__content">
      <section className="filters__content__home">
        <input
          className="filter__search__home"
          onChange={handleChange}
          ref={inputValue}
          type="text"
          placeholder="S E A R C H"
        />

        <aside className="filters__home">
          <h3 className="title__filters">Filters</h3>
          <CategoryFilter />
          <PriceFilter setFromTo={setFromTo} />
        </aside>
      </section>
      <div className="card__content">
        {hotels?.filter(cbfilter).map((hotelInfo) => (
          <HotelCard key={hotelInfo.id} hotel={hotelInfo} />
        ))}
      </div>
    </div>
  );
};
6;
export default HomePage;
