import React from 'react';

const ProfileName = (props) => {
    const { id, caption, username, media_url, media_type } = props.feed
    let name;

    name = (<h1>{username}</h1>);

    return (
        <div className="profileName" id={id}>
            {name}
        </div>
    );
};

export default ProfileName;