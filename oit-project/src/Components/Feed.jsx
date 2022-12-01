import React from 'react'
import './Feed.css';

const Feed = (props) => {

    const id = props.feed.id;
    const caption = props.feed.caption;
    const media_url = props.feed.media_url;
    const media_type = props.feed.media_type;
    const username = props.feed.username;

    let post;

    switch (media_type) {
        case "VIDEO":
            post = (
                <>
                    <video
                        width='100%'
                        height='auto'
                        src={media_url}
                        type="video/mp4"
                        controls playsinline>
                    </video>
                    <div>
                        <h2>{username}</h2>
                    </div>
                    <div>
                        <p>{caption}</p>
                    </div>
                </>
            )
            break;
        case "CAROUSEL_ALBUM":
            post = (
                <>
                    <img
                        className="image2"
                        height='auto'
                        id={id}
                        src={media_url}
                        alt={caption}
                    />
                    <div>
                        <h2 className="username">{username}</h2>
                    </div>
                    <div>
                        <p className="caption2">{caption}</p>
                    </div>
                </>
            );
            break;
        default:
            post = (
                <>
                    <img
                        className="image cursor-pointer"
                        height='auto'
                        id={id}
                        src={media_url}
                        alt={caption}
                        data-bs-toggle="modal"
                        data-bs-target="#imageExample"
                    />
                    <div>
                        <h2 className="username2">{username}</h2>
                    </div>
                    <div>
                        <p className="caption">{caption}</p>
                    </div>
                </>
            );
    }

    return (
        <>
            {post}
        </>

    );
}

export default Feed;



