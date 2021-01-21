import React, {useContext} from 'react'
import classes from './Header.module.css'
import {Context} from '../../context/index'

export const Header = () => {
    const context = useContext(Context)

    const changeTheme = () => {
        context.changeTheme(context.state.theme === "DARK" ? "LIGHT" : "DARK")
        document.documentElement.classList.toggle("light-mode")
    }

    return <header className={[classes.header, context.state.theme === "LIGHT" ? "invert-again" : undefined].join(" ")}>
        <h1>TODO</h1>
        <div onClick={changeTheme}>
            {context.state.theme === "DARK" ? <i className="fas fa-sun"></i> : <i class="fas fa-moon"></i>}
        </div>
    </header>
}