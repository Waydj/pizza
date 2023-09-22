import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Menu, { Loader as MenuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order, { Loader as OrderLoader } from "./features/order/Order";
import { action as UpdateOrder } from "./features/order/UpdateOrder";
import CreateOrder, {
  action as CreateNewOrder,
} from "./features/order/CreateOrder";
import NotFound from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: MenuLoader,
        errorElement: <NotFound />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: OrderLoader,
        errorElement: <NotFound />,
        action: UpdateOrder,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: CreateNewOrder,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
