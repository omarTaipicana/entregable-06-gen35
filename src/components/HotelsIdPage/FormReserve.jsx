import React from "react";
import { useForm } from "react-hook-form";
import useCrud from "../../hooks/useCrud";

const FormReserve = ({ hotelId }) => {
  const { handleSubmit, register } = useForm();
  const [, , createBooking] = useCrud();

  const sumbit = (data) => {
    const url = "https://hotels-api.academlo.tech/bookings";
    data.hotelId = +hotelId;
    createBooking(url, data);
  };

  return (
    <section className="reservation__form__content">
      <h3 className="title__reservation__form">Reservation</h3>
      <form  onSubmit={handleSubmit(sumbit)}>
        <section className="reservation__form">
          <label className="label__reservation__form">
            <span className="span__reservation__form">Check-in</span>
            <input className="input__reservation__form" {...register("checkIn")} type="date" />
          </label>
          <label className="label__reservation__form">
            <span className="span__reservation__form">Check-out</span>
            <input className="input__reservation__form" {...register("checkOut")} type="date" />
          </label>
        </section >
        <button className="reservation__form__btn" type="sumbit">Submit</button>
      </form>
    </section>
  );
};

export default FormReserve;
