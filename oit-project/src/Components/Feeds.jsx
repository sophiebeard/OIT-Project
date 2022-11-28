import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Feed from './Feed'
import SkeletonPosts from '../Skeleton Components/SkeletonPosts.js';

const Feeds = ({ token, ...props }) => {
    const [feeds, setFeedsData] = useState([]);
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        const abortController = new AbortController();


        async function fetchInstagramPost() {
            try {
                axios
                    .get(`https://graph.instagram.com/me/media?fields=caption,id,media_url,username,media_type&limit=${props.limit}&access_token=${tokenProp.current}`)
                    .then((resp) => {
                        setFeedsData(resp.data.data)
                    })
            } catch (err) {
                console.log('error', err)
            }
        }

        fetchInstagramPost();

        return () => {
            abortController.abort();
        };
    }, [props.limit]);

    return (
        <div className="picture">
            {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))}

            {!feeds && [1, 2, 3, 4, 5].map((n) => <SkeletonPosts key={n} theme="light" />)}
        </div>
    );
}

export default Feeds;