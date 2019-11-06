import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export class Contacto extends React.Component {
	render() {
		return (
			<div>
				<header className="home " style={{ backgroundImage: "url(imagenes/portada/fotoKanji.jpg)" }}>
					<form>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Email address</label>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter email"
							/>
							<small id="emailHelp" className="form-text text-muted">
								never share your email with anyone else.
							</small>
						</div>

						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				</header>{" "}
			</div>
		);
	}
}
