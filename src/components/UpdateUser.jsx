import React, { useState } from "react";

const UpdateItemForm = ({ currentUser, updateUser, setEditing }) => {
  const [user, setUser] = useState(currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid black",
          width: "300px",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <h2>Edit User</h2>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="date_of_birth"
          value={user.date_of_birth}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="address"
          value={user.address}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone_number"
          value={user.phone_number}
          onChange={handleInputChange}
        />
        <select name="role" value={user.role} onChange={handleInputChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Update User</button>
        <button onClick={() => setEditing(false)}>Cancel</button>
      </div>
    </form>
  );
};

export default UpdateItemForm;
