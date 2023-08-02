import DeleteItemButton from "./DeleteItemButton";
import { formatCurrency } from "../../utils/helpers";
import UpdateItemQuantity from "./UpdateItemQuantity";


function CartItem({ cartItem = {} }) {

    const { pizzaId, name, quantity, totalPrice } = cartItem;

    return (
        <li className="flex items-center justify-between py-3">
            <p className="font-medium">{quantity} &times; {name}</p>
            <div className="flex items-center gap-2 sm:gap-6">
                <span className="font-semibold">{formatCurrency(totalPrice)}</span>
                <UpdateItemQuantity pizzaId={pizzaId} quantity={quantity} />
                <DeleteItemButton pizzaId={pizzaId} />
            </div>
        </li>
    )
}

export default CartItem