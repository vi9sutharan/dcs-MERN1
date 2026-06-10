import React from 'react';

function Table() {

  const users = [
    { id: 1, name: 'John ', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane ', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Alex ', email: 'alex@example.com', role: 'Developer' }
  ];

  return (
    <table>
      
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      
      
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};c

export default Table;