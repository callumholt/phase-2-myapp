//this component is potentially redundent


import React, {useState} from "react";



function ButtonDarkMode() {
    
    let [ darkMode, setDarkMode ] = useState(false);

    function handleClick() {
        setDarkMode(!darkMode);
        let state = darkMode;
        console.log(state);
    };
    
    return (
        <div>
            <button onClick={handleClick}>Dark Mode</button>

        </div>
    );
};

export default ButtonDarkMode;