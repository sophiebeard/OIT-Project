import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Feed from './Feed'

const Feeds = ({ token, ...props }) => {
    const [feeds, setFeedsData] = useState([]);
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        const abortController = new AbortController();

        async function fetchInstagramPost() {
            try {
                axios
                    .get(`https://graph.instagram.com/me/media?fields=caption,id,media_url,username,media_type&access_token=${tokenProp.current}`)
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
    }, []);

    return (
        <div className="container">
            {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))}
        </div>
    );
}

export default Feeds;