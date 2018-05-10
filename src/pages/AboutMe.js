import React from "react";
import Footer from "../components/Footer";
import $ from "jquery"
import Fam from "./assets/Fam.jpg";
export default class AboutMe extends React.Component {
	
	constructor(props){
		super(props)
	}
	componentDidMount = () =>{
		$("body").css("display", "none");
	
		$("body").fadeIn(1500);
 
		{/*$(".about-fields div").each(function(e) {
        if (e != 0)
            $(this).hide();
    	});
    
		$("#next").click(function(){
			if ($(".about-fields div:visible").next().length != 0)
				$(".about-fields div:visible").next().show().prev().hide();
			else {
				$(".about-fields div:visible").hide();
				$(".about-fields div:first").show();
			}
			return false;
		});

		$("#prev").click(function(){
			if ($(".about-fields div:visible").prev().length != 0)
				$(".about-fields div:visible").prev().show().next().hide();
			else {
				$(".about-fields div:visible").hide();
				$(".about-fields div:last").show();
			}
			return false;
		});*/}

	}
	
	render() {
		return(
			<div className="about">
				<div className="row">
					<h1 className="titles col-sm-12">The Highlights <i className="fa fa-film" aria-hidden="true"></i></h1>
				</div>
				<div className="row about-fields">
					
					<div id="about1">
						<img id="Aboutimg" src={Fam} ></img>
						<p id="legible">My name is Caden, I am a third year Computer Science major at the Univeristy of Cincinnati
						and I plan on minoring in Information Technology with my focus 
						split between both Software Development and Information Security.</p>
					</div>
				</div>
				
				<Footer />
			</div>
		);
	}
}