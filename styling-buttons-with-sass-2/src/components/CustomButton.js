import React from 'react';
import classNames from 'classnames';
import './CustomButton.scss';

const CustomButton = ({children, color,size,fullWidth, outline}) => {
    return (
        <button className={classNames('Button', color, size, {fullWidth, outline})}
        >{children}</button>
    );
};

CustomButton.defaultProps ={
    color:"green",
    size:"medium"
}

export default CustomButton;