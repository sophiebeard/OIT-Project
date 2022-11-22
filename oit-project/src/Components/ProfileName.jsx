import PropTypes from 'prop-types';

const ProfileName = ({ profileName }) => {
    return (
        <div className="profileName">
            <h2>{profileName}</h2>
        </div>
    );
};

export default ProfileName;

ProfileName.propTypes = {
    profileName: PropTypes.string.isRequired,
};