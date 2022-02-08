import React from "react";
import './Button.css'

const Button = props => {
    let classes = 'btn '
    classes += props.operator ? 'operator' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button className={classes} onClick={e => props.click(props.label)}>{props.label}</button>
    )
}

export default Button