import { Form, Button } from "react-bootstrap";
import React, {useState} from 'react';
import { create } from "../core/apiCore";

const Order = () => {

    const [amount, setAmount] = useState(0);
    const [data, setData] = useState({
        name: "",
        address: "",
        phone: ""
    });

    const { name, address, phone } = data;
    const price = amount*15;

    const handleCount = (event) => {
        setAmount(event.target.value < 1 ? 1 : event.target.value);
    };

    const handleChange = name => event => {
        setData({...data, [name]: event.target.value});
    };

    const createOrderData = {
        name, address, phone, amount, price
    };

    const clearForm = () => {
        document.getElementById("newOrder").reset();
        setAmount(0);
    };

    const buy = event => {
        event.preventDefault();
        let s = document.getElementById('success');
        let e = document.getElementById('error');

        if (createOrderData.name !== "" && createOrderData.address !== "" && createOrderData.phone !== "" && createOrderData.amount !== 0){
            create(createOrderData)
            .then(response => {
                clearForm();
                console.log(JSON.stringify(createOrderData));
                s.style.display = "block";
                e.style.display= "none";
            })
            .catch(error => {
                console.log(error);
            });
        } else {
            e.style.display= "block";
        }
    };

    return (
        <Form id="newOrder">
            <Form.Group style={{marginBottom: '10px'}}>
                <Form.Control
                    type="text"
                    placeholder="Full Name *"
                    refs="name"
                    onChange={handleChange("name")}
                />
            </Form.Group>
            <Form.Group style={{marginBottom: '10px'}}>
                <Form.Control
                    as="textarea"
                    placeholder="Address *"
                    rows={3}
                    refs="address"
                    onChange={handleChange("address")}
                />
            </Form.Group>
            <Form.Group style={{marginBottom: '10px'}}>
                <Form.Control
                    type="text"
                    placeholder="Phone *"
                    refs="phone"
                    onChange={handleChange("phone")}
                />
            </Form.Group>
            <Form.Group style={{marginBottom: '20px'}}>
                <Form.Control
                    type="number"
                    placeholder="Amount *"
                    refs="amount"
                    value={amount}
                    onChange={(event) => handleCount(event)}
                />
            </Form.Group>
            <p style={{marginBottom: '20px', fontWeight: 'bold'}}>Subtotal: ${amount*15}</p>
            <Button onClick={buy} variant="primary" type="submit">Buy</Button>
            <p id="success" className="text-success" style={{marginTop: '10px', display: 'none'}}>Your order is saved.</p>
            <p id="error" className="text-danger" style={{marginTop: '10px', display: 'none'}}>Please fill all the required fields.</p>
        </Form>
    );
};

export default Order;