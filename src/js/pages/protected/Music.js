import React from "react";
import ReactAudioPlayer from 'react-audio-player'; 
import Footer from "../../components/Footer";

export default class Music extends React.Component {
	render() {
		return(
			<div class="Music">
				<h1>The Music</h1>
				<h5>Enjoy</h5>
				<ReactAudioPlayer
  					src="gs://portfolio-website-48028.appspot.com/sa.mp3"
  					controls
				/>
				<Footer/>
			</div>
		);
	}
}
