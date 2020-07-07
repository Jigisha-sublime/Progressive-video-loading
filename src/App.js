import React from 'react';
import videoSrc from './assets/video.mp4'
import videoSrc2 from './assets/video2.mp4'
import videoSrc3 from './assets/video3.mp4'
import imgThumb from './assets/img-thumb.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Video />
      </div>
    </div>
  );
}

export default App;

const Video = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const src = getVideoSrc(window.innerWidth)
  const onLoadedData = () => {
    setIsLoading(false)
  }
  return (
    <div className="container">
     {isLoading && <img className="video-thumb tiny" src={imgThumb}/>}
      <video
        autoPlay
        playsInline
        muted
        onLoadedData={() => onLoadedData()}
        type="video/mp4"
        src={src}
        style={{opacity: isLoading ? "0" :"1"}}
        loop />
    </div>
  )
}

const getVideoSrc = (width) => {
  if (width >= 1080) return videoSrc3
  if (width >= 720) return videoSrc2
  return videoSrc
}