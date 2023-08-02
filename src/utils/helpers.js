export function formatCurrency(rawCurrency) {
    return rawCurrency.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}

export function formatDate(rawDate) {
    const date = new Date(rawDate);
    return date.toLocaleString('en-US', {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    })
}

export function calcMinutesLeft(rawDate) {
    const today = new Date().getTime();
    const date = new Date(rawDate).getTime();
    return Math.round((date - today) / 60000); 
}

export function calcPriorityPrice(subtotal) {
    return subtotal * 0.2;
}

export function wait(seconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds);
    })
}