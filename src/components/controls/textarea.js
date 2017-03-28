import React, { PropTypes } from 'react';
import ControlCommon from './control-common';

const TextareaControl = (props) => {
    return (
        <textarea
            {...props}
        ></textarea>
    );
}

TextareaControl.propTypes = {
    ...ControlCommon.propTypes,
    className: PropTypes.string,
    value: PropTypes.string
}

TextareaControl.defaultProps = {
    className: 'textarea',
    cols: 0, // React doesn't render the cols attribute if it is zero
    rows: 3,
    value: ''
}

export default TextareaControl;
