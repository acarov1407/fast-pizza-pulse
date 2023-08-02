import ProtectedLayout from "../layouts/ProtectedLayout";
import OrderForm from "../components/order/OrderForm"
import { getCart } from "../app/features/cartSlice";
import { useSelector } from "react-redux"
import CartEmpty from "../components/cart/CartEmpty";

function CreateOrder() {

  const cart = useSelector(getCart);

  if (cart.length === 0) return <CartEmpty />
  return (
    <ProtectedLayout>
      <div className="">
        <h2 className="text-2xl text-stone-800 mb-8 font-semibold text-center">{`Ready to order? Let's go!`}</h2>
        <OrderForm />
      </div>
    </ProtectedLayout>
  )
}

export default CreateOrder