import React, { useState, useEffect, useDebugValue } from "react";

function RetrieveFormSubmit() {

    let [items, setItems] = useState();
    let itemString = JSON.stringify(items);

    let handleChange = async event => {
        const response = await fetch("http://localhost:3000/ContactMe")
        .then(res => res.json())
        .then((result) => {setItems(result)})

        
    };

    useEffect(() => {
        console.log("this is the items2:", items);
        console.log("item string:",itemString)
      }, [items]);

    return (
        <div>
        <div id="RetrieveFormSubmit">
            <button onClick={handleChange}>Click here to retrieve previous submitted form</button>
            <p>{itemString}</p>
        </div>
        <div>
        <p>
            Please ensure you start JSON Server before trying to retrieve data.
        </p>
        </div>
        </div>
    )
}

export default RetrieveFormSubmit