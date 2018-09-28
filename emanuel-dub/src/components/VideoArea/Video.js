import React from 'react';
import classes from './Video.css';
import ReactPlayer from 'react-player';

const Video = props => {
  return (
    <div className={classes.playerWrapper}>
      <ReactPlayer
        url={props.source}
        className={classes.reactPlayer}
        youtubeConfig={{ playerVars: { showinfo: 1, controls: 1 } }}
        width="60%"
        height="50%"
      />
    </div>
  );
};

export default Video;
