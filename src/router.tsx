import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Admin } from "./pages/admin";
import { Root } from "./pages/root";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/",
    element: <Root />,
  },
]);

export const Router = () => (
  <div>
    <RouterProvider router={router} />
  </div>
);
