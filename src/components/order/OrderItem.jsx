import { formatCurrency } from "../../utils/helpers";

function OrderItem({ orderItem = {}, ingredients = [], isLoadingIngredients }) {

    const { name, quantity, totalPrice } = orderItem;


    return (
        <li className="flex items-center justify-between py-3">
            <div>
                <p className="font-medium">{quantity} &times; {name}</p>
                <p className="text-sm text-stone-500 capitalize mt-0.5">{isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}</p>
            </div>

            <div className="flex items-center gap-2 sm:gap-6">
                <span className="font-semibold">{formatCurrency(totalPrice)}</span>
            </div>
        </li>
    )
}

export default OrderItem