import React, { useEffect, useState } from "react";
import { data } from "./data";
import Lorem from "./Lorem";
import "./style.css";
const Generator = () => {
  const [number, setNumber] = useState("");
  const [lorems, setLorems] = useState([]);
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  useEffect(() => {
    if (number > data.length) {
      setLorems([]);
      setError(true);
      setErrMessage("Number should be less than 15");
    } else if (number < 0) {
      setError(true);
      setErrMessage("Number cannot be negative");
    } else {
      let newData = data.slice(0, number);
      setLorems(newData);
      setError(false);
    }
  }, [number]);
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="cont container p-5  shadow my-5 col-lg-5 mx-auto shadow-lg p-3 mb-5 bg-white rounded border border-dark ">
        <form>
          <h1 className="display-5 text-center fw-bold">Lorem Generator</h1>
          <label className="fw-bold fs-4 mt-2">Add Number</label>
          <input
            className="form-control"
            type="number"
            placeholder="e.g.5"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></input>
          {error && <p className="text-danger fw-bolder">{errMessage}</p>}
          <button
            onClick={handleClick}
            className="btn btn-dark my-1 w-100 mt-3"
          >
            Generate Lorem
          </button>
        </form>
      </div>
      <div className="cont container col-lg-5 mx-auto my-5 pb-5  border border-dark rounded-1">
        <h2 className="fw-bold">Your Answer:</h2>
        {lorems.map((item, index) => {
          return <Lorem text={item} key={index} />;
        })}
      </div>
    </>
  );
};

export default Generator;
