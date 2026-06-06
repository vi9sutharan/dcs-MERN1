import React from "react";

function Bio() {
    const fname = "Sivanathan";
    const lname = "Visutharan";
    const welbtn = React.createElement(
        "button",
        {
            className: "btn",
            onClick: () => alert('welcome ${fname} ${lname}!'),
        },
        "Click Me"
    );
    return (
        <div>
            <h1>welcome to the React Timezone</h1>
            <p>Current Time: {new Date().toLocaleTimeString()}</p>
            <div>{welbtn}</div>
        </div>
    );
}
export default Bio;