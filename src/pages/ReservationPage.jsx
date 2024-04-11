import React, { useEffect, useState } from "react";
import useCrud from "../hooks/useCrud";
import ReserveCard from "../components/ReservationPage/ReserveCard";
import FormReviews from "../components/ReservationPage/FormReviews";
import "./styles/ReservationPage.css"

const ReservationPage = () => {
  const [reserveSelect, setReserveSelect] = useState();
  const [bookings, getBooking, createBooking, deteleBooking, updateBooking] =
    useCrud();

  useEffect(() => {
    const url = `https://hotels-api.academlo.tech/bookings`;
    getBooking(url);
  }, []);
    console.log(reserveSelect);
  return (
    <section>
      <FormReviews
        reserveSelect={reserveSelect}
        setReserveSelect={setReserveSelect}
      />
      <h2>Reservations</h2>
      <div>
        {bookings?.map((reserve) => (
          <ReserveCard
            key={reserve.id}
            reserve={reserve}
            setReserveSelect={setReserveSelect}
            deteleBooking={deteleBooking}
          />
        ))}
      </div>
    </section>
  );
};

export default ReservationPage;
