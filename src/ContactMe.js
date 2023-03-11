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
        alert("thanks for the submission");
        
        if(!response.ok) {
            console.error("an error occured");
        }
    };



    return (
        <div id="contactForm">
            <form onSubmit={handleSubmit}>
                <div className="formGroup">
                <label>
                        Name: 
                        <input name="FullName" value={formData.fullName}  onChange={handleChange}/>
                    </label>

                </div>
                <div className="formGroup">
                <label>
                        Email:
                        <input name="email" value={formData.email}  onChange={handleChange}/>
                    </label>

                </div>
                <div className="formGroup">
                <label>
                        Mobile number:
                        <input name="phone" value={formData.phone}  onChange={handleChange}/>
                    </label>

                </div>
                <div className="formGroup">
                <label>
                        Comments:
                        <input name="comments" value={formData.comments}  onChange={handleChange}/>
                    </label>

                </div>
                <div className="formGroup">
                <label id="submitButton">
                        <button type="submit" >submit</button>
                    </label>

                </div>
                
                         
            </form>
        </div>
    )
}

export default ContactMe;