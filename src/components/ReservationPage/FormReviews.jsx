import React from "react";
import { useForm } from "react-hook-form";
import useCrud from "../../hooks/useCrud";

const FormReviews = ({ reserveSelect, setReserveSelect }) => {
//   console.log(reserveSelect);

  const { handleSubmit, register, reset } = useForm();

  const [review, getReview, createReview, deteleReview, updateReview] =
    useCrud();

  const submit = (data) => {
    const url = "https://hotels-api.academlo.tech/reviews";
    const obj = {
      rating: +data.rating,
      comment: data.comment,
      hotelId: reserveSelect?.hotel.id,
    };
    createReview(url, obj);
    setReserveSelect()
  };
  console.log(review)

  return (
    <article>
      <h3>Reserve</h3>
      <section>
        <header>
          <img src={reserveSelect?.hotel.images[0].url} alt="" />
        </header>
        <h4>{reserveSelect?.hotel.name}</h4>
        <p>
          {reserveSelect?.hotel.city.name}, {reserveSelect?.hotel.city.country}
        </p>
        <ul>
          <li>
            <span>Reservation Days</span>
            <span>{reserveSelect?.reservationDay}</span>
          </li>
          <li>
            <span>Subtotal Price</span>
            <span></span>
            {reserveSelect?.subtotal}
          </li>
        </ul>
      </section>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>Rating</span>
          <select {...register("rating")}>
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>
          </select>
        </label>
        <label>
          <span>Comments</span>
          <textarea {...register("comment")} />
        </label>
        <button>Submit</button>
      </form>
    </article>
  );
};

export default FormReviews;
