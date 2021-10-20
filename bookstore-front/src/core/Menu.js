import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#f5dcb4" };
    } else {
        return { color: "#ffffff" };
    }
};

const Menu = ({ history }) => {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
					<img src="/images/logo.png" alt="logo" style={{width: '50px', height: '50px'}} />
				</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarResponsive">
					<ul class="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/cart')} to="/shop">Cart</Link>
                        </li>
                    </ul>
				</div>
			</div>
		</nav>
    );
};

export default withRouter(Menu);