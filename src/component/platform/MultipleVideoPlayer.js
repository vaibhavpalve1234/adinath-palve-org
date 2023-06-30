import React from 'react';
import YouTube from 'react-youtube';
import './MultipleVideoPlayer.css';

const MultipleVideoPlayer = ({ videos }) => {

  return (
    <div className="multiple-video-player">
      <div className="video-list">
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            <YouTube videoId={video.src} opts={video.opts} />
            <div><p>{video.details}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleVideoPlayer;
