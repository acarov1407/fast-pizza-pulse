import { Link } from "react-router-dom"
import { formatCurrency } from "../../utils/helpers";
import { selectSubtotalCartPrice } from "../../app/features/cartSlice";
import { useSelector } from "react-redux";


function CartOverview() {

  const subtotal = useSelector(selectSubtotalCartPrice);

  if (!subtotal) return null;
  return (
    <div className="bg-stone-800 fixed bottom-0 left-0 w-full h-14">
      <div className="container mx-auto flex items-center justify-between text-stone-100 text-sm uppercase h-full px-2 md:px-0">
        <div className="space-x-4 text-stone-200 font-semibold">
          <span>Subtotal:</span>
          <span className="text-base">{formatCurrency(subtotal)}</span>
        </div>
        <Link
          className="font-semibold"
          to="/cart"
        >
          Go to Cart
        </Link>
      </div>
    </div>
  )
}

export default CartOverview