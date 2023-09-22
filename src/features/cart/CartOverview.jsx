import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartItems, getTotalCartPrice } from "./cartSlice";

function CartOverview() {
  const totalCartItems = useSelector(getTotalCartItems);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartItems) {
    return null;
  }

  return (
    <div className="bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="flex items-center justify-between space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartItems} pizzas</span>
        <span>${totalCartPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
