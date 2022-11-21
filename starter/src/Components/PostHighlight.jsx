import PropTypes from 'prop-types';
import Picture from './Picture';
import ProfileName from './ProfileName';
import Caption from './Caption';

const PostHighlight = ({ picture, profileName, caption }) => {
    return (
        <div className="postHighlight" >
            <div className="picture">
                <Picture picture={picture} />
            </div>
            <div className="profileName">
                <ProfileName profileName={profileName} />
            </div>
            <div className="caption">
                <Caption caption={caption} />
            </div>
        </div>
    )
}

PostHighlight.propTypes = {
    picture: PropTypes.string.isRequired,
    profileName: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired
}

export default PostHighlight;