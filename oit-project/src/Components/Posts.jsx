import PropTypes from 'prop-types';
import Picture from './Picture';
import ProfileName from './ProfileName';
import Caption from './Caption';
import { Link } from 'react-router-dom';

const Posts = ({ picture, profileName, caption, id }) => {
    return (
        <div className="posts">
            <Link to={`/posts/${id}`} >
                <Picture picture={picture} />
                <ProfileName profileName={profileName} />
                <Caption caption={caption} />
            </Link>
        </div>
    )
}

Posts.propTypes = {
    picture: PropTypes.string.isRequired,
    profileName: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired
}

export default Posts;