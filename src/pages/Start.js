import React from "react";
import Footer from "../components/Footer";
import { Link,Redirect } from "react-router-dom";
import $ from "jquery";
import GrandC from "./assets/GrandC.jpg";

export default class Start extends React.Component {
	constructor(props){
		super(props)
	}
	componentDidMount = () =>{
    	$("body").css("display", "none");
 
    	$("body").fadeIn(1000);
		{/*$("button").click(function(event){
        	event.preventDefault();
        	var linkLocation = $(this).attr('href');
        	$("body").fadeOut(1000, redirectPage);
    	});
    	function redirectPage() {
        	return <Redirect to='/home'/>
    	}*/}
	}
	
	render() {
		
		return(
			<div className="homepage">
				<div className="wrapper">
					<div className="cols-xs-12">
						<img src={GrandC} className="xp-image" height="600px" width="auto" alt=""/>
						<h1 className="header1">Web Developer and Browns' Fanatic</h1>
					</div>
					<div className="cols-xs-12">
						
						<Link to="/home"><button className="buttonghost" >View Portfolio</button></Link>
					</div>
				</div>
			</div>		
		);
	}
};