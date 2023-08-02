import Button from "../ui/Button";
import DeleteItemButton from "../cart/DeleteItemButton";
import { formatCurrency } from "../../utils/helpers";
import { addToCart, selectCurrentQuantityById } from "../../app/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function MenuItem({ product = {} }) {

    const { id, name, unitPrice, imageUrl, ingredients, soldOut } = product;

    const dispatch = useDispatch();
    const currentQuantity = useSelector((state) => selectCurrentQuantityById(state, id));

    const isInCart = currentQuantity > 0;

    const handleAddToCart = () => {
        dispatch(addToCart({
            pizzaId: id,
            name,
            quantity: 1,
            unitPrice,
            totalPrice: unitPrice * 1
        }))
    }

    return (
        <li className="flex gap-5 py-2 px-2 md:px-0">
            <img
                className={`w-28 md:w-36 ${soldOut ? 'opacity-70 grayscale' : 'opacity-100'}`}
                height={200}
                width={200}
                src={imageUrl}
                alt={name} />

            <div className="flex flex-col grow justify-between md:py-2">
                <div>
                    <p className="font-semibold">{name}</p>
                    <p className="capitalize text-stone-600 italic">{ingredients.join(', ')}</p>
                </div>
                <div className="font-medium flex items-center justify-between">
                    {!soldOut ?
                        <p className="text-lg">{formatCurrency(unitPrice)}</p>
                        :
                        <p className="text-sm uppercase text-stone-500">Sold Out</p>}
                    <div>
                        {!soldOut && !isInCart &&
                            <Button type="button" variant="small" onClick={handleAddToCart}>
                                Add to cart
                            </Button>}
                        {isInCart && <DeleteItemButton pizzaId={id} />}
                    </div>

                </div>
            </div>
        </li>
    )
}

export default MenuItem