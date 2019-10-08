import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<header className="home" style={{ backgroundImage: "url(imagenes/foto.png)" }}>
				<div id="logo1">
					<h1> KAJINMUEBLERIA</h1>
				</div>
			</header>
		);
	}
}
