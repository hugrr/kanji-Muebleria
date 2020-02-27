import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export class Contacto extends React.Component {
	render() {
		return (
			<div>
				<header
					className="homeContact"
					style={{
						backgroundImage: "url(imagenes/portada/fotoKanji.jpg)",
						height: "800px"
					}}>
					<form>
						<div id="contact" className="form-group container text-center">
							<h1 htmlFor="exampleInputEmail1" className="form-text text-muted">
								Nombre
							</h1>
							<input
								type="name"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Ingresa tu Nombre"
							/>

							<h1 htmlFor="exampleInputEmail1" className="form-text text-muted">
								Dirección Email
							</h1>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Ingresa tu Email"
							/>
							<h3 className="form-text text-white">
								ingresa un comentario o solicita uno de nuestros productos
							</h3>
							{""}
							<span className="form-text text-white">Te responderemos a la brevedad</span>

							<textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />

							<button id="submit" type="submit" className="btn btn- btn-dark ">
								Submit
							</button>
						</div>
					</form>
				</header>
			</div>
		);
	}
}
