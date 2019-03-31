import React from 'react';

const CommentDetail = (props) => {
  let { image, author, timeAgo, comment} = props;
  return (
    <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={image}/>
        </a>
        <div className="content">
          <a href="/" className="author">
            {author}
          </a>
          <div className="metadata">
            <span className="date">{timeAgo}</span>
          </div>
          <div className="text">{comment}</div>
        </div>
      </div>
  )
}

export default CommentDetail