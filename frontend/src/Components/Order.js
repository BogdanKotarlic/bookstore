import { Form, Button } from "react-bootstrap";
import React from 'react';

const Order = () => {
    return (
        <Form>
            <Form.Group style={{marginBottom: '10px'}}>
                <Form.Control
                    type="text"
                    placeholder="Full Name *"
                    required
                />
            </Form.Group>
            <Form.Group style={{marginBottom: '10px'}}>
                <Form.Control
                    as="textarea"
                    placeholder="Address *"
                    rows={3}
                />
            </Form.Group>
            <Form.Group style={{marginBottom: '10px'}}>
                <Form.Control
                    type="text"
                    placeholder="Phone *"
                    required
                />
            </Form.Group>
            <Form.Group style={{marginBottom: '20px'}}>
                <Form.Control
                    type="number"
                    placeholder="Amount *"
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">Buy</Button>
        </Form>
    );
};

export default Order;