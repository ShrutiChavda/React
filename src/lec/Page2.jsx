import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export function Page2({ nextPage, prevPage }) {
  const { formData, setFormData } = useContext(UserContext);

  return (
    <div>
      <h1>Enter Rate of Interest (%)</h1>
      <input
        type="number"
        placeholder="Enter Rate of Interest"
        value={formData.interestRate}
        onChange={(e) =>
          setFormData({ ...formData, interestRate: e.target.value })
        }
      />
      <button onClick={prevPage}>Back</button>
      <button onClick={nextPage}>Next</button>
    </div>
  );
}
