import React from 'react'
import Caption from './Caption';
import ProfileName from './ProfileName';

const Feed = (props) => {
    const { id, caption, username, media_url, media_type } = props.feed
    let post;

    switch (media_type) {
        case "VIDEO":
            post = (
                <video
                    width='100%'
                    height='auto'
                    src={media_url}
                    type="video/mp4"
                    controls playsinline>
                </video>
            )
            break;
        case "CAROUSEL_ALBUM":
            post = (
                <img
                    width='100%'
                    height='auto'
                    id={id}
                    src={media_url}
                    alt={caption}
                />
            );
            break;
        default:
            post = (
                <img
                    width='100%'
                    height='auto'
                    id={id}
                    src={media_url}
                    alt={caption}
                />
            );
    }

    return (
        <>
            <>
                {post}
            </>
            {/* <Caption /> */}
            {/* <ProfileName /> */}
        </>

    );
}

export default Feed;