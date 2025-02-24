import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export function Page4({ prevPage }) {
  const { formData } = useContext(UserContext);
  const { principal, interestRate, duration } = formData;

  const totalAmount =
    parseFloat(principal) +
    (parseFloat(principal) * parseFloat(interestRate) * parseFloat(duration)) /
      100;

  return (
    <div>   
      <h1>Total Amount</h1>
      <p>Principal: {principal}</p>
      <p>Rate of Interest: {interestRate}%</p>
      <p>Duration: {duration} years</p>
      <h2>Total Amount: {totalAmount.toFixed(2)}</h2>
      <button onClick={prevPage}>Back</button>
    </div>
  );
}
