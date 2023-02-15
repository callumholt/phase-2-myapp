import Button from "./Button";
import React, { useState } from "react";
import ContactMe from "./ContactMe";
import RetrieveFormSubmit from "./RetrieveFormSubmit";



function Home() {
    
        let [ darkMode, setDarkMode ] = useState(false);
        let state = darkMode ? "buttonDarkMode" : "buttonLightMode";
        let buttonText = darkMode ? "Click me for Light Mode" : "Click me for Dark Mode";

        function handleClick() {
            setDarkMode(!darkMode);
           
        };
        
    return (
        <div>
            <div id="home">
                <h2>My name is Callum and I'm a Software Engineer</h2>
                <Button buttonDir="#about" sectionName="about"/>
                <button className="darkModeButton" id={state} onClick={handleClick}>{buttonText}</button>
                <ContactMe />
                <RetrieveFormSubmit />
            </div>
        </div>
    )
    
}

export default Home;