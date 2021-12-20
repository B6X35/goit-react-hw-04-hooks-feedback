import PropTypes from 'prop-types'
import { memo } from 'react';
const Notification = ({ message }) => {
    return (
        <p>
            {message}
        </p>
    )
}

export default memo(Notification);

Notification.propType = {
    message: PropTypes.string.isRequired
}