import React, { Fragment } from 'react';
import './Home.css';
import Menu from './Menu';
import Footer from './Footer';

const Home = () => {
    const homeScreen = () => {
        return (
            <div className="container-fluid padding">
                <div className="row text-center">
                    <div className="col-12">
                        <h1 className="padding">BUY THE BEST BOOK EVER</h1>
                        <img src="/images/down-arrow.png" alt="down-arrow" style={{width: '50px', height: '50px'}} />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Fragment>
            <Menu />
            {homeScreen()}
            <Footer />
        </Fragment>
    );
};

export default Home;