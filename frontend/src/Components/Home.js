import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Footer from "./Footer";
import Menu from "./Menu";
import Order from "./Order";

const Home = () => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <div className="container-fluid padding">
                <div className="row text-center">
                    <div className="col-12">
                        <h1 className="padding">BUY THE BEST BOOK EVER</h1>
                        <img src="/images/down-arrow.png" alt="down-arrow" style={{width: '50px', height: '50px'}} />
                    </div>
                    <div className="col-12">
                        <img className="img-fluid" src="/images/best_book.png" alt="best-book" />
                        <p style={{fontWeight: 'bold'}}>$15</p>
                        <Button onClick={handleShow} className="btn btn-primary" style={{width: '30%'}}>Buy</Button>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Please fill out this form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Order />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default Home;