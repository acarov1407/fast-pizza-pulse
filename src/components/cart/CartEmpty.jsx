import { Link } from "react-router-dom"

function CartEmpty() {
    return (
        <div>
            <Link
                className="text-blue-500 hover:text-blue-600 transition-colors border border-gray-100 hover:border-blue-600 p-2 rounded-xl"
                to="/menu"
            >
                &larr; Back to menu
            </Link>
            <p className="py-10 px-8 font-medium">
                Your cart is empty, please go back to menu and add something to cart
            </p>
        </div>
    )
}

export default CartEmpty