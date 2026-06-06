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
            <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
               {useFormState.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                </tr>
               ))}
            </tbody>
            </table>
        </div>
    );
}   export default ReactList;