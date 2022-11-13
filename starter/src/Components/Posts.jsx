import React from 'react';
import { useEffect, useState } from 'react';
import SkeletonPosts from '../skeletons/SkeletonPosts';

const Posts = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            const data = await res.json();
            setPosts(data);
        }, 5000)
    })

    return (
        <div className="posts">
            {posts && posts.map(post => (
                <div className="post" key={post.id}>
                    <p>{post.url}</p>
                    <h3>{post.id}</h3>
                    <p>{post.title}</p>
                </div>
            ))}

            {!posts && [1, 2, 3, 4, 5].map((n) => <SkeletonPosts key={n} theme="light" />)}
        </div>
    );
}

export default Posts;