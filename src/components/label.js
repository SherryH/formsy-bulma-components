import React, { PropTypes } from 'react';
import classNames from 'classnames/dedupe';
import RequiredSymbol from './required-symbol';

const Label = (props) => {

    const { layout, label, htmlFor, labelClassName, fakeLabel, required } = props;

    if (layout === 'elementOnly') {
        return null;
    }

    let labelClassNames = classNames([
        'label',
        labelClassName
    ]);

    if (fakeLabel) {
        return (
            <div
                className={labelClassNames}
                data-required={required}
            >
                <strong>
                    {label}
                    <RequiredSymbol required={required} />
                </strong>
            </div>
        );
    }

    return (
        <label
            className="label"
            data-required={required}
            htmlFor={htmlFor}
        >
            {label}
            <RequiredSymbol required={required} />
        </label>
    );
}

Label.propTypes = {
    fakeLabel: PropTypes.bool,
    htmlFor: PropTypes.string,
    label: PropTypes.node,
    labelClassName: React.PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.object
    ]),
    layout: PropTypes.oneOf(['horizontal', 'vertical', 'elementOnly']),
    required: PropTypes.bool
};

export default Label;
