import React from "react";
import "./index.css";
import "./App.css";
import Primeir from "./components/primeiro";
import terceiro from "./components/terceiro";
import Segundo from "./components/segundo";
import Quatro from "./components/cop4";
import Card from "./components/Card";

export default () => (
	<div className="app">
		<div className="cardo">
			<Primeir></Primeir>
		</div>

		<div className="cardo">
			<Segundo titulo="titulo" subtitulo="Deus proverá"></Segundo>
		</div>
		<div></div>
		<Card titulo="card"> </Card>
	</div>
);
