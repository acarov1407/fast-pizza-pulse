import OrderItem from "../components/order/OrderItem";
import UpdateOrder from "../components/order/UpdateOrder";
import { useFetcher, useLoaderData } from "react-router-dom"
import { getOrder } from "../services/apiRestaurant";
import { calcMinutesLeft, formatCurrency, formatDate } from "../utils/helpers";
import { useEffect } from "react";

export async function loader({ params }) {
  const order = await getOrder(params.id);
  return order;
}


function Order() {

  const order = useLoaderData();

  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
  }, [fetcher]);

  const { id, status, priority, priorityPrice, orderPrice, estimatedDelivery, cart } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div>
      <div className="flex flex-col gap-5 items-center sm:justify-between sm:gap-0 sm:flex-row">
        <h2 className="text-stone-800 text-2xl font-semibold">Order #{id} status</h2>
        <div className="space-x-4">
          {priority && <span className="p-2 bg-red-500 text-white font-medium uppercase text-sm rounded-xl">Priority</span>}
          <span className="p-2 bg-green-500 text-white uppercase text-sm font-medium rounded-xl">{status} Order</span>
        </div>
      </div>

      <div className="bg-stone-200 p-4 mt-8 rounded flex items-center justify-between">
        <p className="text-stone-800 font-semibold">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left`
            : 'Order should have arrived'
          }
        </p>
        <p className="text-sm text-stone-600">{`(Estimated delivery: ${formatDate(estimatedDelivery)})`}</p>
      </div>

      <ul className="divide-y divide-stone-200 mt-6 border-t border-b border-stone-200">
        {cart.map(item => (
          <OrderItem
            key={item.pizzaId}
            orderItem={item}
            ingredients={fetcher?.data?.find(el => el.id === item.pizzaId).ingredients}
            isLoadingIngredients={fetcher.state === 'loading'}
          />
        ))}
      </ul>

      <div className="bg-stone-200 p-4 rounded text-stone-700 space-y-2 mt-6 font-medium">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-semibold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
      {!priority && <UpdateOrder />}
    </div>
  )
}

export default Order