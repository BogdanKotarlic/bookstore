import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white" style={{width: '100%', bottom: 0}}>
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a href="#" role="button" style={{backgroundColor: '#3b5998', border: 'none'}} className="btn btn-primary btn-floating m-1">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" style={{backgroundColor: '#55acee', border: 'none'}} className="btn btn-primary btn-floating m-1" role="button">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" style={{backgroundColor: '#ac2bac', border: 'none'}} className="btn btn-primary btn-floating m-1" role="button">
                        <i className="fab fa-instagram"></i>
                    </a>
                </section>
            </div>
            <div className="text-center p-3">
                @ 2021 Copyright:
                <a className="text-white" href="#"> Bogdan Kotarlic</a>
            </div>
        </footer>
    );
};

export default Footer;