import React, { useState } from "react";

const AddUserForm = ({ addUser }) => {
  const initialFormState = {
    username: "",
    email: "",
    password: "",
    name: "",
    date_of_birth: "",
    address: "",
    phone_number: "",
    role: "user",
  };

  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user.username || !user.email || !user.password || !user.name) return;
    addUser(user);
    setUser(initialFormState);
    console.log(user);
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
        <h2>Add User</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
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
          placeholder="Address"
          value={user.address}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone_number"
          placeholder="Phone Number"
          value={user.phone_number}
          onChange={handleInputChange}
        />
        <select name="role" value={user.role} onChange={handleInputChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default AddUserForm;
