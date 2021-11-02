import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Menu from './Menu';
import { listOrders, deleteOrder } from '../core/apiCore';

const AdminPanel = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = () => {
        listOrders().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setOrders(data);
            }
        })
    };

    const destroy = orderId => {
        deleteOrder(orderId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadOrders();
            }
        })
    };

    const showOrders = () => {
        return (
            <div className="container-fluid padding">
                <div className="row text-center">
                    <div className="col-12">
                        {orders.map((o, oIndex) => {
                            return (
                                <div key={oIndex}>
                                    <ul className="list-group mb-5">
                                        <li className="list-group-item">Name: {o.name}</li>
                                        <li className="list-group-item">Address: {o.address}</li>
                                        <li className="list-group-item">Phone: {o.phone}</li>
                                        <li className="list-group-item">Amount: {o.amount}</li>
                                        <li className="list-group-item">Subtotal: {o.price}</li>
                                        <li onClick={() => destroy(o._id)} className="list-group-item" style={{color: 'red', fontWeight: 'bold'}}>Click to DELETE order</li>
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <Menu />
            {showOrders()}
            <Footer />
        </>
    );
};

export default AdminPanel;