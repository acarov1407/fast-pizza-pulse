import Button from "../ui/Button"
import { deleteFromCart } from "../../app/features/cartSlice"
import { useDispatch } from "react-redux"

function DeleteItemButton({ pizzaId }) {

    const dispatch = useDispatch();
    
    return (
        <Button variant="small" onClick={() => dispatch(deleteFromCart(pizzaId))}>
            Delete
        </Button>
    )
}

export default DeleteItemButton