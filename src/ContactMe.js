import React from "react";

function ContactMe() {
    return (
        <div>
            <form>
                <label>
                    Name: 
                    <input name="myinput"/>
                </label>
                <label>
                    Email:
                    <input name="email" />
                </label>
                <label>
                    Mobile number:
                    <input name="phone" />
                </label>
                <label>
                    Comments:
                    <input name="comments" />
                </label>
                <label>
                    Submit:
                    <button type="submit" text="submit">submit</button>
                </label>
            </form>
        </div>
    )
}

export default ContactMe;