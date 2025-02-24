import React, { useState } from "react";
import { UserProvider } from "./UserContext";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import { Page4 } from "./Page4";

export default function MultiStepForm() {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [
    <Page1 nextPage={() => setCurrentPage(1)} />,
    <Page2 nextPage={() => setCurrentPage(2)} prevPage={() => setCurrentPage(0)} />,
    <Page3 nextPage={() => setCurrentPage(3)} prevPage={() => setCurrentPage(1)} />,
    <Page4 prevPage={() => setCurrentPage(2)} />,
  ];

  return (
    <UserProvider>
      <div>{pages[currentPage]}</div>
    </UserProvider>
  );
}
