import Header from "../components/ui/Header";
import CartOverview from "../components/cart/CartOverview";
import Spinner from "../components/ui/Spinner";
import { Outlet, useNavigation } from "react-router-dom";
import { getCart } from "../app/features/cartSlice";
import { useSelector } from "react-redux";

function AppLayout() {

    const cart = useSelector(getCart);

    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';


    return (
        <div className="h-screen flex flex-col">
            { isLoading && <Spinner />}
            <Header />
            <main className="bg-gray-100 flex-1">
                <div className={`max-w-2xl mx-auto pt-8 px-2 md:px-0 ${cart.length ? 'pb-22' : 'pb-8'}`}>
                    <Outlet />
                </div>
            </main>
            <CartOverview />
        </div>
    )
}

export default AppLayout