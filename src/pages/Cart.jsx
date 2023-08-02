import ProtectedLayout from "../layouts/ProtectedLayout";
import Button from "../components/ui/Button";
import CartItem from "../components/cart/CartItem";
import CartEmpty from "../components/cart/CartEmpty";
import { Link } from "react-router-dom";
import { getCart, clearCart } from "../app/features/cartSlice";
import { getUsername } from "../app/features/userSlice";
import { useSelector, useDispatch } from "react-redux";


function Cart() {

  const username = useSelector(getUsername);
  const cart = useSelector(getCart);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <ProtectedLayout>
      {
        cart.length === 0 ? <CartEmpty />
          :
          <div>
            <Link
              className="text-blue-500 hover:text-blue-600 transition-colors border border-gray-100 hover:border-blue-600 p-2 rounded-xl"
              to="/menu"
            >
              &larr; Back to menu
            </Link>
            <h2 className="text-2xl font-semibold text-stone-800 mt-8">Your cart, {username}</h2>
            <ul className="divide-y divide-stone-200 mt-2">
              {cart.map(cartItem => <CartItem key={cartItem.pizzaId} cartItem={cartItem} />)}
            </ul>
            <div className="flex items-center space-x-4">
              <Button to="/order/new" variant="link">
                Order Pizzas
              </Button>
              <Button variant="secondary" onClick={handleClearCart}>
                Clear Cart
              </Button>
            </div>
          </div>
      }

    </ProtectedLayout>
  )
}

export default Cart