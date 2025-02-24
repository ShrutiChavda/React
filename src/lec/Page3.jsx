import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export function Page3({ nextPage, prevPage }) {
  const { formData, setFormData } = useContext(UserContext);

  return (
    <div>
      <h1>Enter Duration (Years)</h1>
      <input
        type="number"
        placeholder="Enter Duration"
        value={formData.duration}
        onChange={(e) =>
          setFormData({ ...formData, duration: e.target.value })
        }
      />
      <button onClick={prevPage}>Back</button>
      <button onClick={nextPage}>Next</button>
    </div>
  );
}
