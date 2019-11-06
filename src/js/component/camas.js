import React, { Component } from "react";
import Gallery from "react-photo-gallery";

export const Camas = () => (
	<div className="container">
		<hr size="10" />

		<div className="row">
			{" "}
			<button type="button" className="btn btn-dark component">
				Camas
			</button>
			<i id="back" className="far fa-arrow-alt-circle-left" />
		</div>

		<div className="row text-center">
			<div className="col md-4">
				<div id="camas" className="card">
					<img className="card-img-top" src="imagenes/camas/camaAgustina.jpg" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Cama Agustina</h5>
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
				<div id="camas" className="card">
					<img className="card-img-top" src="imagenes/camas/camaAldo.jpg" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Cama Aldo</h5>
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
				<div id="camas" className="card">
					<img className="card-img-top" src="imagenes/camas/camaAldoKidz.jpg" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Cama Aldo Kidz</h5>
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
			<div className="col md-4">
				<div id="camas" className="card">
					<img className="card-img-top" src="imagenes/camas/camaDelu.jpg" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Cama Delu</h5>
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
				<div id="camas" className="card">
					<img className="card-img-top" src="imagenes/camas/camaElisa.jpg" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Cama Elisa</h5>
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
				<div id="camas" className="card">
					<img className="card-img-top" src="imagenes/camas/camaLisa.jpg" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Cama Lisa</h5>
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

			<div className="col md-4">
				<div id="camas" className="card">
					<img className="card-img-top" src="imagenes/camas/camaLuna.jpg" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Cama Luna</h5>
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
				<div id="camas" className="card">
					<img className="card-img-top" src="imagenes/camas/camaPino.jpg" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">Cama Pino</h5>
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
				<div id="camas" className="card">
					<img className="card-img-top" src="imagenes/camas/camaYaren2.jpg" alt="30px" />
					<div className="card-body">
						<h5 className="card-title">Cama Yaren</h5>
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
