import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import './Menu.css';

const Menu = ({ history }) => {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-primary sticky-top">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
					<img src="/images/book.png" alt="logo" style={{width: '50px', height: '50px'}} />
				</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarResponsive">
					<ul class="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </li>
                    </ul>
				</div>
			</div>
		</nav>
    );
};

export default withRouter(Menu);