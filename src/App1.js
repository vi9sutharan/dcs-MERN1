import React from "react";

const App1 = () => {
    const users = [
        { id: 1, name: 'geeks' , age: 30},
         { id: 2, name: 'for' , age: 25},
          { id: 3, name: 'geeks' , age: 35},
    ];
    return (
        <ul>
            {users.map((user) => (
                user.age > 30 ?(
                    <li key={user.id}>{user.name} is over 30 years old</li>

                ):(<li key={user.id}>{user.name} is under 30 years old</li>)
            ))}
        </ul>
    );
};
export default App1;