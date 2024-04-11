import { useState } from "react";
import axios from "axios";
import getConfigToken from "../services/getConfigToken";

const useCrud = () => {
  const [response, setResponse] = useState();

  const getApi = (url) => {
    axios
      .get(url, getConfigToken())
      .then((res) => setResponse(res.data))
      .catch((err) => console.log(err));
  };

  const createApi = (url, data) => {
    axios
      .post(url, data, getConfigToken())
      .then((res) => {
        console.log(res.data);
        setResponse(response ? [...response, res.data] : [res.data]);
      })
      .catch((err) => console.log(err));
  };

  const deteleApi = (url, id) => {
    axios
      .delete(url, getConfigToken())
      .then((res) => {
        console.log(res.data);
        setResponse(response.filter((e) => e.id !== id));
      })
      .catch((err) => console.log(err));
  };

  const updateApi = (url, id, data) => {
    axios
      .post(url, id, data, getConfigToken())
      .then((res) => {
        console.log(res.data);
        setResponse(response.map((e) => (e.id === id ? res.data : e)));
      })
      .catch((err) => console.log(err));
  };

  return [response, getApi, createApi, deteleApi, updateApi];
};

export default useCrud;
