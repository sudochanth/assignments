import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const mappedList = videos.map(video => {
    return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
  })

  return (
    <div className="ui relaxed divided list">
      {mappedList}
    </div>
  )
}

export default VideoList;