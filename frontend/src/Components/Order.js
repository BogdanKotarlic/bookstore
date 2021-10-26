import { Form, Button } from "react-bootstrap";
import React, {useState, useEffect} from 'react';
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

    const buy = event => {
        event.preventDefault();

        create(createOrderData)
        .then(response => {
            console.log("success");
            console.log(JSON.stringify(createOrderData));
        })
        .catch(error => {
            console.log(error);
        });

    };

    return (
        <Form>
            <Form.Group style={{marginBottom: '10px'}}>
                <Form.Control
                    type="text"
                    placeholder="Full Name *"
                    required
                    onChange={handleChange("name")}
                />
            </Form.Group>
            <Form.Group style={{marginBottom: '10px'}}>
                <Form.Control
                    as="textarea"
                    placeholder="Address *"
                    rows={3}
                    onChange={handleChange("address")}
                />
            </Form.Group>
            <Form.Group style={{marginBottom: '10px'}}>
                <Form.Control
                    type="text"
                    placeholder="Phone *"
                    required
                    onChange={handleChange("phone")}
                />
            </Form.Group>
            <Form.Group style={{marginBottom: '20px'}}>
                <Form.Control
                    type="number"
                    placeholder="Amount *"
                    required
                    value={amount}
                    onChange={(event) => handleCount(event)}
                />
            </Form.Group>
            <p style={{marginBottom: '20px', fontWeight: 'bold'}}>Subtotal: ${amount*15}</p>
            <Button onClick={buy} variant="primary" type="submit">Buy</Button>
        </Form>
    );
};

export default Order;