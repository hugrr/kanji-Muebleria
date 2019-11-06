import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<header className="home " style={{ backgroundImage: "url(imagenes/portada/fotoKanji.jpg)" }} />

				<div className="container text-center ">
					<h1 id="description2">productos</h1>
					<div className="row">
						<div className="col-md-2">
							<img src="imagenes/iconos/cama.png" height="100px" />
							<Link to="/camas">
								<button type="button" className="btn btn-dark">
									CAMAS
								</button>
							</Link>
						</div>
						<div className="col-md-2">
							<img src="imagenes/iconos/estanteria.png" height="100px" />
							<Link to="/bibliotecas">
								<button type="button" className="btn btn-dark">
									LIBREROS
								</button>
							</Link>
						</div>
						<div className="col-md-2">
							<img src="imagenes/iconos/escritorio.png" height="100px" />
							<Link to="/escritorios">
								<button type="button" className="btn btn-dark">
									ESCRITORIOS
								</button>
							</Link>
						</div>
						<div className="col-md-2 ">
							<img src="imagenes/iconos/litera2.png" height="100px" />
							<Link to="/camarotes">
								{" "}
								<button type="button" className="btn btn-dark">
									CAMAROTES
								</button>
							</Link>
						</div>
						<div className="col-md-2 ">
							<img src="imagenes/iconos/gabinete.png" height="100px" />
							<Link to="/proyectos">
								<button type="button" className="btn btn-dark">
									PROYECTOS
								</button>
							</Link>
						</div>
						<div className="col-md-2 ">
							<img src="imagenes/iconos/gabinete2.png" height="100px" />
							<Link to="/organizadores">
								<button type="button" className="btn btn-dark">
									ORGANIZADORES
								</button>
							</Link>
						</div>
					</div>
					<div className="container text-center">
						<h1 id="description">Sobre Kanji Muebleria</h1>

						<div className="row">
							<div className="col-md-6">
								<img src="imagenes/portada/descripcion.jpg" height="600px " />
							</div>
							<div id="fin" className="col-md-6">
								<img src="imagenes/iconos/cama.png" height="100px" />
								<p id="description-Text">
									kanji muebleria nació en el año 2018 desde el patio de mi casa, empezando a fabricar
									muebles pequeños para la casa, desde entonces en las tardes empece a dedicarme a
									esto. Me hice una fanpage empece a subir fotos de mis trabajos, ahora me dedico a
									esto es mi fuente de trabajo actual. ahora fabrico muebles a medida, como también
									muebles infantiles montessori.
								</p>

								<i id="insta" className="fab fa-instagram" />
								<i id="insta" className="fab fa-facebook-f" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
