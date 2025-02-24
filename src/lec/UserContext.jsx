// Create 3 stage form with following elements:
// Page 1. Ask User to enter Principle (10,000)
// Page 2. Ask User to enter rate of interest (7)
// Page 3. Ask user to enter duration (1)
// Page 4. Show total amount including interest
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [formData, setFormData] = useState({
    principal: "",
    interestRate: "",
    duration: "",
  });

  return (
    <UserContext.Provider value={{ formData, setFormData }}>
      {children}
    </UserContext.Provider>
  );
}
