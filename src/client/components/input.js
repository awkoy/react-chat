import React from 'react';

export default props => {
    const {
        type,
        action,
        value,
        name,
        classes,
        placeholder
    } = props;

    return ( 
        <input       
            className={classes}       
            type = {type}
            name={name}
            onChange = {action}
            placeholder = {placeholder}
            defaultValue = {value}
        />
    )
}