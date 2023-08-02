
export async function getMenu() {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/menu`);

    if (!response.ok) throw new Error('Error trying to get menu');

    const { data } = await response.json();
    return data;
}

export async function getOrder(id) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/order/${id}`);

    if (!response.ok) throw new Error(`Error trying to get order #${id}`);

    const { data } = await response.json();
    return data;
}

export async function createOrder(order) {

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/order`, {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) throw Error();

        const { data } = await response.json();
        return data;

    } catch (error) {
        throw Error('Failed creating your order');
    }
}

export async function updateOrder(id, updatedData) {

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/order/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedData),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) throw Error();

    } catch (error) {
        throw Error('Failded updating your order');
    }
}