import React from "react";

function Button(props) {
    return (
        <a href={props.buttonDir}>
            <button className="button is-primary"  onClick={()=>console.log("clicked button")}>Click here to go to {props.sectionName} section</button>
        </a>
    );
}

export default Button;