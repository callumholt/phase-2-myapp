import Button from "./Button";
import React from "react";

function Home() {
    return (
        <div>
            <div id="home">
                <h2>My name is Callum and I'm a Software Engineer</h2>
                <Button buttonDir="#about" sectionName="about"/>
            </div>
            
        </div>
    )
}

export default Home;