import React from 'react';
import BlogPost from './BlogPost';

const BlogInfo = [
    {
        title: "Man must explore, and this is exploration at its greatest",
        subtitle: "Problems look mighty small from 150 miles up",
        author: "Start Bootstrap",
        date: "September 24, 2019"
    },
    {
        title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
        subtitle: "",
        author: "Start Boostrap",
        date: "zzzz"
    },
    {
        title: "xxxx",
        author: "xyxy",
        date: "zzzz"
    }
]

const Blog = () => {

    const mappedBlogInfo = BlogInfo.map((info, i) => {
        return (
            <BlogPost
                key={i+info.title}
                title={info.title}
                subtitle={info.subtitle}
                author={info.author}
                date={info.date}
            />
        )
    })
    return (
        <div>
            {mappedBlogInfo}
        </div>
    )
}

export default Blog;