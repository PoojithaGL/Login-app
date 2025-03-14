import React from "react";

function Button(props) {
    return (
        <div>
            {props.children}
            <button onClick={props.handleClick}>Click me</button>
        </div>
    );
}

export default Button;


