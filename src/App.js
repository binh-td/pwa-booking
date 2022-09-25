import React from "react";
import "react-datepicker/dist/react-datepicker.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookTicket from "./pages/BookTicket";
import PaymentTicket from "./pages/PaymentTicket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BookTicket />,
  },
  {
    path: "/payment",
    element: <PaymentTicket />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
