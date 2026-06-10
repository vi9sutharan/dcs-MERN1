import React from "react";
import { useFormState } from "react-dom";

function ReactList() {
    const fruits = ["Apple" , "Banana" , "Cherry"];
    return(
        <div>
            <h1>fruits List</h1>
            <ul>
                {fruits.map((f, index) => (
                    <li>{f}</li>
                )
                )}
            </ul>
            
        </div>
    );
}   export default ReactList;