import React from "react";
import ReactDOM from "react-dom";
import RH2 from "./assets/RH2.png";
import Linds from "./assets/Linds.png";
import Footer from "../components/Footer";
import $ from "jquery";
import {PieChart} from "react-easy-chart";
import FFS from "./assets/FFS.png";

export default class Projects extends React.Component {
	componentDidMount = () =>{
			$("body").css("display", "none");
	
			$("body").fadeIn(1500);
		}
	render() {
		
		return(
			<div className="project">
				<h1>The Experience <i className="fa fa-terminal" aria-hidden="true"></i></h1>
				<div className="container">
				<h2 className="left-align" >Skills</h2>
				<div className="col-md-4 col-sm-6 col-xs-6">
				{/*<PieChart
					size={200}
					innerHoleSize={150}
					data={[
					{ key: 'Html5', value: 95, color: '#e00122' },
					{ key: 'N/A', value: 5, color: 'white' },
					]}
				/>
				</div>
				<div className="col-md-4 col-sm-6 col-xs-6">
				<PieChart
					size={200}
					innerHoleSize={150}
					data={[
					{ key: 'CSS3', value: 92, color: '#086993' },
					{ key: 'N/A', value: 8, color: 'white' },
					]}
				/>
				</div>
				<div className="col-md-4 col-sm-6 col-xs-6">
				<PieChart
					size={200}
					Label = "test"
					innerHoleSize={150}
					data={[
					{ key: 'JavaScript', value: 80, color: '#E5DC18' },
					{ key: 'N/A', value: 20, color: 'white' },
					]}
				/>
				</div>
				<div className="col-md-4 col-sm-6 col-xs-6">
				<PieChart
					size={200}
					innerHoleSize={150}
					data={[
					{ key: 'Python', value: 74, color: '#127DAD' },
					{ key: 'B', value: 26, color: 'white' },
					]}
				/>
				</div>
				<div className="col-md-4 col-sm-6 col-xs-6">
				<PieChart
					size={200}
					innerHoleSize={150}
					data={[
					{ key: 'React.js', value: 68, color: '#930F23' },
					{ key: 'N/A', value: 32, color: 'White' },
					]}
				/>
				</div>
				<div className="col-md-4 col-sm-6 col-xs-6">
				<PieChart
					size={200}
					innerHoleSize={150}
					data={[
					{ key: 'A', value: 100, color: '#aaac84' },
					{ key: 'N/A', value: 200, color: 'white' },
					]}
				/>*/}
				</div>
				</div>
				<h2><a href="//Research.uc.edu" target="_blank" rel="noopener" >Office of Research Front Facing Site</a></h2>
				<img className="xp-image" src={FFS}></img>
				<p id="legible">I am currently working on the front facing site for the Office of Research. This application will hold all of the functionality needed for a great user experience not only as a researcher but also an everyday person looking to know more about UC's OOR.</p>
				<h2 className="col-sm-12"><a href="//ResearchHow2.uc.edu" target="_blank" rel="noopener" >University of Cincinnati's Research How 2</a></h2>
				<img className="xp-image" src={RH2}></img>
				<p id="legible">This was my very first project with the UC's Office of Research. Research How 2 is a database for all of the offices inside the Office of Research. Its goal was to help simplify the original very complicated processes of both navigating through hundreds of documents but also the actions necessary. You can check it out <a href="//ResearchHow2.uc.edu" target="_blank">here</a>.</p>
				<h2><a href="//lindsaycriswell.com" target="_blank" rel="noopener" >Lindsay Criswell's Portfolio Website</a></h2>
				<img className="xp-image" src={Linds}></img>
				<p id="legible">This project was made in WordPress with a Theme. I was there if she had issues or concerns. The site is a portfolio for all of her work and has been designed beautifully.</p>
				<Footer />
			</div>
		);
	}
}