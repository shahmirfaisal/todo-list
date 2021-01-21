import React, {useContext} from 'react'
import classes from './CheckBox.module.css'
import {Context} from '../../context/index'

export const CheckBox = ({ checked, onClick }) => {
    const context = useContext(Context)
    const classNames = [classes.circle, checked && classes.circleHighlight, context.state.theme === "LIGHT" ? "invert-again" : undefined]

    return (
        <div className={classNames.join(" ")} onClick={onClick}>
            {checked? <i className={["fas fa-check", context.state.theme === "LIGHT" ? "invert-again" : undefined].join(" ")} ></i> : null}
        </div>
    )
}