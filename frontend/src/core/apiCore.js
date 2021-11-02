import { API } from "../config";

export const create = (createOrderData) => {
    return fetch(`${API}/order/create`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ order: createOrderData })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listOrders = () => {
    return fetch(`${API}/order/list`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).then(response => {
        return response.json();
    }).catch(err => console.log(err));
};

export const deleteOrder = (orderId) => {
    return fetch(`${API}/order/${orderId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).then(response => {
        return response.json();
    }).catch(err => console.log(err)); 
}