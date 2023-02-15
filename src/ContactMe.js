import React, { useState } from "react";

function ContactMe() {
    let [formData, setFormData] = useState({
        FullName: "",
        email: "",
        phone: "",
        comments: ""
    });

    let handleChange = event => {
        setFormData({...formData, [event.target.name]: event.target.value})
    } 

    let handleSubmit = async event => {
        event.preventDefault();
        const response = await fetch("http://localhost:3000/ContactMe", {
            method: "POST",
            headers: {"content-type":"application/json"},
            body: JSON.stringify(formData)
        });
        if(!response.ok) {
            console.error("an error occured");
        }
    };



    return (
        <div id="contactForm">
            <form onSubmit={handleSubmit}>
                <label>
                    Name: 
                    <input name="FullName" onChange={handleChange}/>
                </label>

                <label>
                    Email:
                    <input name="email" onChange={handleChange}/>
                </label>

                <label>
                    Mobile number:
                    <input name="phone" onChange={handleChange}/>
                </label>

                <label>
                    Comments:
                    <input name="comments" onChange={handleChange}/>
                </label>

                <label>
                    Submit:
                    <button type="submit" >submit</button>
                </label>
            </form>
        </div>
    )
}

export default ContactMe;