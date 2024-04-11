import React, { useEffect } from "react";
import useResponse from "../../hooks/useResponse";
import HotelCard from "../HomePage/HotelCard";

const OtherHotels = ({ hotel }) => {
  const url = `https://hotels-api.academlo.tech/hotels?cityId=${hotel?.cityId}`;
  const [hotelsInCity, getHotelsInCity] = useResponse(url);

  useEffect(() => {
    if (hotel) {
      getHotelsInCity();
    }
  }, [hotel]);

  return (
    <section>
      <h3 className="title__otherHotels">
        Other Hotels in{" "}
        <span className="city__name__tile__otherHotels">
          {hotel?.city.name}
        </span>
      </h3>
      <div className="card__content">
        {hotelsInCity
          ?.filter((hotelinfo) => hotelinfo.id !== hotel.id)
          .map((hotelinfo) => (
            <HotelCard hotel={hotelinfo} key={hotelinfo.id} />
          ))}
      </div>
    </section>
  );
};

export default OtherHotels;
