import { useForm } from "react-hook-form";

const PriceFilter = ({ setFromTo }) => {
  const { handleSubmit, register, reset } = useForm();

  const submit = (data) => {
    const from = data.from;
    const to = data.to;
    setFromTo({
      from: from === "" ? 0 : +from,
      to: to === "" ? Infinity : to,
    });
  };

  return (
    <section>
      <h3>Price</h3>
      <form className="form__filter__price" onSubmit={handleSubmit(submit)}>
        <label className="label__filter__price">
          <span className="span__filter__price">From</span>
          <input className="input__filter__price" {...register("from")} type="number" />
        </label>
        <label className="label__filter__price">
          <span className="span__filter__price">To</span>
          <input className="input__filter__price" {...register("to")} type="number" />
        </label>
        <button className="filter__price__btn">Apply</button>
      </form>
    </section>
  );
};

export default PriceFilter;
