import React from "react";

const ReserveCard = ({ reserve, setReserveSelect, deteleBooking }) => {
  const checkIn = new Date(reserve.checkIn).getTime();
  const checkOut = new Date(reserve.checkOut).getTime();
  const days = (checkOut - checkIn) / (1000 * 60 * 60 * 24);

  const price = reserve.hotel.price;
  const priceForDay = days * price;

  const handleReview = () => {
    const obj = {
      ...reserve,
      reservationDay: days,
      subtotal: priceForDay,
    };
    setReserveSelect(obj);
  };

  const handleDeleteBooking = () =>{
    const url = `https://hotels-api.academlo.tech/bookings/${reserve.id}`
   
    deteleBooking(url, reserve.id)
  }

  return (
    <article>
      <header>
        <img src={reserve.hotel.images[0].url} alt="" />
      </header>
      <section>
        <h3>{reserve.hotel.name}</h3>
        <div>
          {reserve.hotel.city.name}, {reserve.hotel.city.country}
        </div>
        <div onClick={handleReview}>Rate and comment this visit...</div>
      </section>
      <section>
        <ul>
          <li>
            <span>Reservation Days </span>
            <span>{days}</span>
          </li>
          <li>
            <span>subtotal Price </span>
            <span>{priceForDay}</span>
          </li>
        </ul>
      </section>
      <footer>
        <button onClick={handleDeleteBooking}>
          <i className="bx bx-trash"></i>
        </button>
      </footer>
    </article>
  );
};

export default ReserveCard;
