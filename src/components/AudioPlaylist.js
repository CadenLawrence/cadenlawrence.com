import React from 'react';
import { Gui, SeekBar, BufferBar,
  Poster, Audio, Title, FullScreen, Mute, Play, PlayBar,
  VolumeBar, Duration, CurrentTime, Download, BrowserUnsupported,
 } from 'react-jplayer';
import JPlaylist, { connect, Playlist, Shuffle, Next, Previous, Repeat,
  TogglePlaylist, Remove, MediaLink, Title as PlaylistTitle } from 'react-jplaylist';
import MarvinsRoomremix from "../pages/assets/MarvinsRoomremix.mp3";
import makeitoutremix from "../pages/assets/makeitoutremix.mp3";
import CollegeLife from "../pages/assets/CollegeLife.mp3";
import LookinAtMe from "../pages/assets/LookinAtMe.mp3";
import SoFar from "../pages/assets/SoFar.mp3";
import Coverart from "../pages/assets/Coverart.jpg";

const AudioPlaylist = () => (
  <JPlaylist className="jp-sleek">
    <Audio />
    <Gui>
      <div className="jp-title-container">
          <Poster />
          <Title />
        </div>
      <div className="jp-controls jp-icon-controls">
        <div className="jp-playlist-container">
          <Playlist>
            <Remove />
            <MediaLink>
              <PlaylistTitle />
            </MediaLink>
          </Playlist>
          <TogglePlaylist><i className="fa fa-ellipsis-h" /></TogglePlaylist>
        </div>
        <Previous><i className="fa fa-step-backward" /></Previous>
        <Play><i className="fa">{/* Icon set in css*/}</i></Play>
        <Next><i className="fa fa-step-forward" /></Next>
        <Repeat>
          <i className="fa">{/* Icon set in css*/}</i>
          <i className="fa fa-repeat" />
        </Repeat>
        <Shuffle><i className="fa fa-random" /></Shuffle>
        <div className="jp-progress">
          <SeekBar>
            <BufferBar />
            <PlayBar />
            <CurrentTime />
            <Duration />
          </SeekBar>
        </div>
        <div className="jp-volume-container">
          <Mute>
            <i className="fa">{/* Icon set in css*/}</i>
          </Mute>
          <div className="jp-volume-slider">
            <div className="jp-volume-bar-container">
              <VolumeBar />
            </div>
          </div>
        </div>
        <FullScreen><i className="fa fa-expand" /></FullScreen>
        <Download><i className="fa fa-download" /></Download>
      </div>
      <BrowserUnsupported />
    </Gui>
  </JPlaylist>
);

const options = {
  id: 'AudioPlaylist',
  verticalVolume: true,
};

const jPlaylistOptions = {
  hidePlaylist: true,
  playlist: [
    {
      title: 'College Life',
      artist: 'Cade',
      sources: {
        mp3: "/static/media/CollegeLife.9ad5df05.mp3",
      },
      poster: "./static/media/Coverart.8c600773.jpg",
    },
    {
      title: 'Lookin At Me',
      artist: 'Cade',
      sources: {
        mp3: "/static/media/LookinAtMe.5f887186.mp3",
      },
      poster: "./static/media/Coverart.8c600773.jpg",
    },
    {
      title: 'So Far',
      artist: 'Cade',
      sources: {
        mp3: "/static/media/SoFar.f87736eb.mp3",
      },
      poster: "./static/media/Coverart.8c600773.jpg",
    },
    {
      title: 'Make It Out Remix(feat. Big B)',
      artist: 'Cade',
      sources: {
        mp3: "/static/media/makeitoutremix.8d7a7e0b.mp3",
      },
      poster: "./static/media/Coverart.8c600773.jpg",
    },
    {
      title: 'Marvins Room Remix',
      artist: 'Cade',
      sources: {
        mp3: "./static/media/MarvinsRoomremix.ad227af5.mp3",
      },
      poster: "./static/media/Coverart.8c600773.jpg",
    },
  ],
};

export default connect(AudioPlaylist, options, jPlaylistOptions);