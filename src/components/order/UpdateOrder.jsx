import Button from "../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";
import { useFetcher } from "react-router-dom"

export async function action({ params }) {
    const updatedOrderData = { priority: true };
    await updateOrder(params.id, updatedOrderData);
    return null;
}

function UpdateOrder() {

    const fetcher = useFetcher();
    return (
        <fetcher.Form method="PATCH" className="text-right">
            <Button type="submit" disabled={fetcher.state === 'loading'}>Make Priority</Button>
        </fetcher.Form>
    )
}

export default UpdateOrder;

