import React from "react";

const ListClick = () => {
    const COMPANY = ["GEERS", "FOR", "GEERS"];
    const handleClick = (COMPANY) => {
        //alert(`you clicked on ${COMPANY}`);
         alert(`COMPANY ${COMPANY}`);
    };
    return (
        <ul>
            {COMPANY.map((COMPANY,index) => (
                <button key={index} onClick={() =>
                    handleClick(COMPANY)
                }>
                    {COMPANY}
                </button>
            ))}
        </ul>
    );

};
export default ListClick;