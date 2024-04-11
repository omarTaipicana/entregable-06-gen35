import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/HotelCard.css";

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/hotels/${hotel.id}`);
  };

  const ratingInt = Math.round(Number(+hotel.rating));
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const starClass = i <= ratingInt ? "star filled" : "star";
    stars.push(<div className={starClass} key={i}></div>);
  }

  return (
    <article className="hotel__card">
      <header className="header__hotel__card">
        <img className="img__hotel__card" src={hotel.images[0].url} alt="" />
      </header>
      <section className="section__hotel__card">
        <h3 className="title__section__hotel__card">{hotel.name}</h3>

       <div className="rating__hotel__card">
       <div className="star-rating">{stars}</div>
        <p>{hotel.rating}</p>
       </div>
        <span className="city__hotel__card">
          {hotel.city.name}, {hotel.city.country}
        </span>
        <div className="price__hotel__card">$ {hotel.price}</div>
        <footer className="footer__hotrl__card">
          <button className="hotel__card__btn" onClick={handleClick}>
            See more...
          </button>
        </footer>
      </section>
    </article>
  );
};

export default HotelCard;
