import PropTypes from 'prop-types';

const Picture = ({ picture, profileName }) => {
    return (
        <div className="picture">
            <img src={picture} alt={profileName}></img>
        </div>
    );
};

export default Picture;

Picture.propTypes = {
    picture: PropTypes.string.isRequired,
    profileName: PropTypes.string.isRequired,
};