


import React, { useState } from "react";
import Button from "./Button";  // Import the Button component

function A() {
    const [state, setState] = useState(0);

    function handleClick() {
        setState(prevState => prevState + 1);
    }

    return (
        <div> 
            <p>Count: {state}</p>
            <Button handleClick={handleClick}>Increment Count:</Button>
        </div>
    );
}

export default A;
