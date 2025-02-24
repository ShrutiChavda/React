import { useContext } from "react";
import { UserContext } from "./UserContext";

export function Page1({ nextPage }) {
  const { formData, setFormData } = useContext(UserContext);

  return (
    <div>
      <h1>Enter Principal Amount</h1>
      <input
        type="number"
        placeholder="Enter Principal"
        value={formData.principal}
        onChange={(e) =>
          setFormData({ ...formData, principal: e.target.value })
        }
      />
      <button onClick={nextPage}>Next</button>
    </div>
  );
}
