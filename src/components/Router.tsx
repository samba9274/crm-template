
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Admin } from '../pages/Admin';
import { Content } from '../pages/Content';

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/",
    element: <Content />,
  },
]);

export const  Router = () => (
  <div>
    <RouterProvider router={router} />
  </div>
);