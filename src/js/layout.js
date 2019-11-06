import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Camarotes } from "./component/camarotes";
import { Proyectos } from "./component/proyectos";
import { Bibliotecas } from "./component/bibliotecas";
import { Organizadores } from "./component/organizadores";
import { Camas } from "./component/camas";
import { Escritorios } from "./component/escritorios";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Contacto } from "./views/contacto";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/demo" component={Demo} />
						<Route path="/camarotes" component={Camarotes} />
						<Route path="/organizadores" component={Organizadores} />
						<Route path="/bibliotecas" component={Bibliotecas} />
						<Route path="/proyectos" component={Proyectos} />
						<Route path="/escritorios" component={Escritorios} />
						<Route path="/camas" component={Camas} />
						<Route path="/contacto" component={Contacto} />
						<Route path="/single/:theid" component={Single} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
