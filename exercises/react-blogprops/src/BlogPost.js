import React from 'react';

const BlogPost = (props) => {
    return (
        <div id="blogPost">
            <h1>{props.title}</h1>
            <h1>{props.subtitle}</h1>
            <h2>Posted by {props.author} on {props.date}</h2>
        </div>
    )
}

export default BlogPost;

