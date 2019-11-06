import React, { Component } from "react";
import Gallery from "react-photo-gallery";

export const Camarotes = () => (
	<div className="container">
		<hr size="10" />

		<div className="row">
			{" "}
			<button type="button" className="btn btn-dark component">
				Camarotes
			</button>
			<i id="back" className="far fa-arrow-alt-circle-left" />
		</div>

		<div className="row text-center">
			<div className="col md-4">
				<div className="card">
					<img className="card-img-top" src="imagenes/camarote/camarote1.jpg" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Camarote Casita</h5>s<p> Precio $350.000</p>
						<a
							href="#"
							className="btn btn-dark
						">
							comprar
						</a>
						<p className="card-text">
							Camarote Casita Fabricada en madera de pino de 2x3 y terciado Mueblería de 18mm, producto
							desarmable y armado con pernos parafusos.
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
								<option value="1">190x105 $390.000</option>
								<option value="2">190x90 $360.000</option>
								<option value="3">140x70 $230.000</option>
							</select>
						</div>
					</div>
				</div>
			</div>

			<div className="col md-4">
				<div className="card">
					<img className="card-img-top" src="imagenes/camarote/camarote2.jpg" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Camarote super Kids</h5>
						<p> Precio $230.000</p>
						<a
							href="#"
							className="btn btn-dark
						">
							comprar
						</a>
						<p className="card-text">
							Camarote super Kids Fabricada en terciado Muebleria, camarote desarmable modelo transición
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
					<img className="card-img-top" src="imagenes/camarote/camarote3.jpg" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Camarote casita + escalera repisa</h5>
						<p> Precio $460.000</p>
						<a
							href="#"
							className="btn btn-dark
						">
							comprar
						</a>
						<p className="card-text">
							Camarote casita, construida para colchón de 1 plaza , agregando una escalera con repisas
							fabricada en terciado mueblería de 18mm , camarote casita, terminada en detalle con un
							barniz base a agua natural sin olor, no tóxico
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
