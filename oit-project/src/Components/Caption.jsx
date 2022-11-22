import PropTypes from 'prop-types';

const Caption = ({ caption }) => {
    return (
        <div className="caption">
            <p>{caption}</p>
        </div>
    );
};

export default Caption;

Caption.propTypes = {
    caption: PropTypes.string.isRequired,
};