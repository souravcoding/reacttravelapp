import React from "react"
import "./Button.css"
import {Link} from "react-router-dom"
const Button=(props)=>{

 const STYLE=["btn--primary","btn--outline"]
 const SIZE=["btn--medium","btn--large"]

const checkButtonStyle=STYLE.includes(props.buttonStyle)?(props.buttonStyle):STYLE[0]
const checkButtonSize=SIZE.includes(props.buttonSize)?(props.buttonSize):SIZE[0]
    return (<>

    <Link to="/sign-up" className="btn-mobile">
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={props.onClick} type={props.type}>
            {props.children}
        </button>
    </Link>

    </>) 
}

export default Button