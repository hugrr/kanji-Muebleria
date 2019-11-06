import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className=" navbar navbar-light ">
				<div className="col-3-md text-center">
					{" "}
					<h1>KANJI MUEBLERIA</h1>
				</div>
				<div className="row">
					<i id="insta2" className="fab fa-instagram " />

					<i id="insta2" className="fab fa-facebook-f" />
					<Link to="/">
						<button type="button" className="btn btn-dark menu">
							inicio
						</button>
					</Link>
					<Link to="/contacto">
						<button type="button" className="btn btn-dark menu">
							Contacto
						</button>
					</Link>
				</div>
			</nav>
		);
	}
}
