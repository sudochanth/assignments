import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const mappedList = videos.map(video => {
    return <VideoItem video={video} />
  })

  return (
    <div className="ui relaxed divided list">
      {mappedList}
    </div>
  )
}

export default VideoList;