import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useResponse from "../hooks/useResponse";
import { Map, Marker, Overlay } from "pigeon-maps";
import OtherHotels from "../components/HotelsIdPage/OtherHotels";
import FormReserve from "../components/HotelsIdPage/FormReserve";
import "./styles/HotelsIdPage.css";

const HotelsIdPage = () => {
  const [indexImage, setIndexImage] = useState(0);
  const { id } = useParams();
  const url = `https://hotels-api.academlo.tech/hotels/${id}`;

  const [hotel, getHotel] = useResponse(url);

  useEffect(() => {
    getHotel();
  }, [id]);

  const ratingInt = Math.round(Number(+hotel?.rating));
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const starClass = i <= ratingInt ? "star filled" : "star";
    stars.push(<div className={starClass} key={i}></div>);
  }

  const imagesArray = hotel?.images.map((image) => image.url);
  console.log(imagesArray);
  return (
    <div>
      <header className="header__hotelId">
        <h2 className="title__hotelId">{hotel?.name}</h2>{" "}
        <h2>RATING - {hotel?.rating}</h2>
        <div className="star-rating">{stars}</div>
      </header>
      <div className="slice__map__hotelId">
        <div className="img__slice__hotelId">
          <i
            onClick={
              indexImage == 0
                ? () => setIndexImage(0)
                : () => setIndexImage(indexImage - 1)
            }
            className="bx bxs-caret-left-circle"
          ></i>
          <img className="img__slice" src={imagesArray?.[indexImage]} alt="" />

          <i
            onClick={
              indexImage == imagesArray?.length - 1
                ? () => setIndexImage(0)
                : () => setIndexImage(indexImage + 1)
            }
            className="bx bxs-caret-right-circle"
          ></i>
        </div>

        {hotel && (
          <Map
            height={300}
            width={400}
            defaultCenter={[+hotel?.lat, +hotel?.lon]}
            defaultZoom={10}
            maxZoom={16}
            minZoom={5}
          >
            <Overlay anchor={[+hotel?.lat, +hotel?.lon]} offset={[20, 20]}>
              <img src="/img/hotel.png" width={30} />
            </Overlay>
          </Map>
        )}
      </div>
      <section className="info__hotelId">
        <h3>
          {hotel?.city.name}, {hotel?.city.country}
        </h3>
        <p className="addres__hotelId">
          <i className="bx bx-map"></i>

          <span> {hotel?.address}</span>
        </p>
        <p className="description__hotelId">{hotel?.description}</p>
      </section>
      {localStorage.getItem("token") ? (
        <FormReserve hotelId={hotel?.id} />
      ) : (
        <h4>
          If you want to make a reservation, please{" "}
          <Link to="/login">Login</Link>
        </h4>
      )}
      <OtherHotels hotel={hotel} />
    </div>
  );
};

export default HotelsIdPage;
