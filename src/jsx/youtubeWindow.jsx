import React from 'react';
import YouTube from 'react-youtube';

const YoutubeWindow = ({ videoId }) => {
  const youtubeStyle = {
    position: 'absolute',
    bottom: '0',
  };

  const opts = {
    height: '400',
    width: '600', 

  };

  return (
    <YouTube videoId={videoId} opts={opts} />
  );
};

export default YoutubeWindow;