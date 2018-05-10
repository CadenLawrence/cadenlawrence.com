import React from "react";
import Squad from "./assets/Squad.png";
import Footer from "../components/Footer";
import $ from "jquery";

export default class Home extends React.Component {
	componentDidMount = () =>{
    	$("body").css("display", "none");
 
    	$("body").fadeIn(1500);
	}
	render() {
		return(
			<div className="home">
				<div className="row">
					<div className="col-sm-12">
						<h1 className="titles" >The Basics <i className="fa fa-code" aria-hidden="true"></i></h1>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12" id="image">
						<a href={Squad}><img src={Squad} alt="Caden and His friends" id="Homeimg" /><br/></a>
						<p id="imgp">From left to right: Christian Vaflor, Hannah Kanzter, Missy Dean, and Caden Lawrence.</p>
					</div>
				</div>
				<div className="intro">
					<p id="legible">I am currently a third year CS major at The University of Cincinnati. I also work as Student Developer at UC's Office of Research Information Technology department. 
						My goal as of now is to continiue to get more experience with Front/Back-end development work to become a Full-Stack Software Developer. 
						I also will continue to work with cyber-security and possibly in the future go into the security field. As for hobbies, I am a huge Cleveland sports fan and enjoy creating music on the side. 
						If you want to see the projects I have done you can click Projects. 
						If you want to know alittle more about me and my life you can click the About Me. 
						If you want me to ask me technology advice, have some freelance work you need done, or have any other inquiries you can click Contact Me.</p>
				</div>
				<Footer />
			</div>		
		);
	}
};