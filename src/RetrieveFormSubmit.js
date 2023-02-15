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
        <div id="RetrieveFormSubmit">
            <button onClick={handleChange}>Click here to retreive previous submitted form</button>
            <p>{itemString}</p>
        </div>
    )
}

export default RetrieveFormSubmit