import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className=" navbar navbar-light bg-light">
				<a className="navbar-brand" href="#">
					<img src="imagenes/libro.jpg " width="100px" />
				</a>

				<div className="col md">
					<span>INICIO</span>
				</div>
				<div className="col md">
					<span>CONTACTO</span>
				</div>
			</nav>
		);
	}
}
