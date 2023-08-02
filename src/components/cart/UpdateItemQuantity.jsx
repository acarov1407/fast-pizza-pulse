import Button from "../ui/Button";
import { increaseItemQuantity, decreaseItemQuantity } from "../../app/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function UpdateItemQuantity({ pizzaId, quantity }) {

    const maxQuantity = useSelector(state => state.cart.MAX_QUANTITY_PER_ITEM);
    const dispatch = useDispatch();

    return (
        <div className="flex gap-0.5 sm:gap-2">
            <Button
                variant="round"
                onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
                disabled={quantity === 1}>-</Button>
            <Button
                variant="round"
                onClick={() => dispatch(increaseItemQuantity(pizzaId))}
                disabled={quantity === maxQuantity}
            >+</Button>
        </div>
    )
}

export default UpdateItemQuantity