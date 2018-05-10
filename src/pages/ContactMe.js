import React from "react";
import firebase from "firebase";
import config from "./config/constants";
import Footer from "../components/Footer";
import $ from "jquery";

export default class ContactMe extends React.Component {
	componentDidMount = () =>{
		$("body").css("display", "none");
		$("body").fadeIn(1500);
 
	}
	render() {
		// Reference messages collection
		var messagesRef = firebase.database().ref('messages');
		// Submit form
		function submitForm(e){
			e.preventDefault();

			// Get values
			let name = getInputVal('name');
			let company = getInputVal('company');
			var email = getInputVal('email');
			var phone = getInputVal('phone');
			var message = getInputVal('message');

			// Save message
			saveMessage(name, company, email, phone, message);

			// Show alert
			//document.querySelector('.alert').style.display = 'block';

			// Hide alert after 3 seconds
			//setTimeout(function(){
			//	document.querySelector('.alert').style.display = 'none';
			//},3000);

			// Clear form
			document.getElementById('contactForm').reset();
		}

		// Function to get get form values
		function getInputVal(id){
		return document.getElementById(id).value;
		}

		// Save message to firebase
		function saveMessage(name, company, email, phone, message){
			var newMessageRef = messagesRef.push();
			newMessageRef.set({
				name: name,
				company: company,
				email: email,
				phone: phone,
				message: message
			});
		}
		return(
			<div className="contact" >
				<h1>The Contact <i className="fa fa-paper-plane-o"></i></h1>
				<div className="form">
					<div className="container">
						<form id="contactForm" onSubmit={submitForm}>
							<div className="col-md-offset-1 col-md-5">
								<fieldset>
									<input name="name" type="text" id="name" size="30" placeholder="Name" />
									<br />
									<input name="email" type="text" id="email" size="30" placeholder="Email" />
									<br />
									<input name="phone" type="text" id="phone" size="30" placeholder="Phone" />
									<br />
									<input name="compant" type="text" id="company" size="30" placeholder="Company" />
									<br />
								</fieldset>
						</div>
							<div className="col-md-5">
								<fieldset>
								<textarea name="message" cols="40" rows="20" id="message" placeholder="Message"></textarea>
								</fieldset>
							</div>
							<div className="col-md-offset-1 col-md-10">
								<fieldset>
								<button type="submit" className="btn btn-lg" id="submit" value="Submit">Send Message</button>
								</fieldset>
						</div>
						</form>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}