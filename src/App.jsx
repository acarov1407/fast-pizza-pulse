import AppLayout from "./layouts/AppLayout";
import ErrorLayout from "./layouts/ErrorLayout";
import Home from "./pages/Home";
import Menu, { loader as menuLoader } from "./pages/Menu";
import Cart from "./pages/Cart";
import Order, { loader as orderLoader } from "./pages/Order";
import { action as orderAction } from "./components/order/UpdateOrder";
import CreateOrder from "./pages/CreateOrder";


import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <ErrorLayout />,
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
      },
      {
        path: '/order/:id',
        element: <Order />,
        loader: orderLoader,
        action: orderAction,
        errorElement: <ErrorLayout />
      }
    ]
  }

]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
