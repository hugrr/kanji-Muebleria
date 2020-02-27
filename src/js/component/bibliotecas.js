import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import { Link } from "react-router-dom";

export const Bibliotecas = () => (
	<div className="container">
		<hr size="10" />

		<div className="row">
			{" "}
			<button type="button" className="btn btn-dark component">
				Libreros
			</button>
			<div id="back">
				<Link to="/">
					<i id="far" className="far fa-arrow-alt-circle-left" />
				</Link>
			</div>
		</div>

		<div className="row text-center">
			<div className="col md-4">
				<div className="card">
					<img className="card-img-top" src="imagenes/bibliotecas/apilaLibros.jpg" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Apila Libros</h5>
						<p> Precio $95.000</p>
						<a
							href="#"
							className="btn btn-dark
						">
							comprar
						</a>
						<p id="sinDescripcion" className="card-text">
							Sin Descripción
						</p>
					</div>
					<div id="boton" className="input-group mb-3 ">
						<div className="input-group-prepend">
							<button id="boton" className="btn btn-dark" type="button">
								Medidas
							</button>
							<select
								className="custom-select"
								id="inputGroupSelect03"
								aria-label="Example select with button addon">
								<option selected>..</option>
							</select>
						</div>
					</div>
				</div>
			</div>

			<div className="col md-4">
				<div className="card">
					<img className="card-img-top" src="imagenes/bibliotecas/libreroCa.jpg" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Librero Ca</h5>
						<p> Precio $65.000</p>
						<a
							href="#"
							className="btn btn-dark
						">
							comprar
						</a>
						<p id="sinDescripcion" className="card-text">
							Sin Descripción
						</p>
					</div>
					<div id="boton" className="input-group mb-3 ">
						<div className="input-group-prepend">
							<button id="boton" className="btn btn-dark" type="button">
								Medidas
							</button>
							<select
								className="custom-select"
								id="inputGroupSelect03"
								aria-label="Example select with button addon">
								<option selected>..</option>
								<option value="1">120X80X15$65.000</option>
							</select>
						</div>
					</div>
				</div>
			</div>

			<div className="col md-4">
				<div className="card">
					<img className="card-img-top" src="imagenes/bibliotecas/libreroDelu.jpg" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Librero delu</h5>
						<p> Precio $90.000</p>
						<a
							href="#"
							className="btn btn-dark
						">
							comprar
						</a>
						<p className="card-text">
							Librero delu fabricado en contra chapado de pino de 18 mm, color natural pensado para poner
							varios libros desde el más pequeño hasta ese librero grande donde quedara perfecto, nuestro
							librero delu tiene una zona para poder dejar cajas de juguetes o lo que gustes en la parte
							de abajo.
						</p>
					</div>
					<div id="boton" className="input-group mb-3 ">
						<div className="input-group-prepend">
							<button id="boton" className="btn btn-dark" type="button">
								Medidas
							</button>
							<select
								className="custom-select"
								id="inputGroupSelect03"
								aria-label="Example select with button addon">
								<option selected>..</option>
								<option value="1">85x80X30 $90.000</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
