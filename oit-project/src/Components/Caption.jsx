import React from 'react';

const Caption = (props) => {
    const { id, caption, username, media_url, media_type } = props.feed
    let photoCaption;

    photoCaption = (<h1>{caption}</h1>);

    return (
        <div className="caption" id={id}>
            {photoCaption}
        </div>
    );
};

export default Caption;

