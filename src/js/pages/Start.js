import React from "react";

import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default class Start extends React.Component {
	render() {
		return(
			<div class="homepage">
				<div class="wrapper">
					<div class="cols-xs-12">
						<h1 class="header1">Front-End Developer and Brown's fanatic</h1>
					</div>
					<div class="cols-xs-12">
						<Link to="/Home"><button class="buttonghost" >View Portfolio</button></Link>
					</div>
				</div>
			</div>		
		);
	}
};