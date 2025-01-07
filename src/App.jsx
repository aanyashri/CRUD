import React, { useState, useEffect } from "react";
import api from "./components/api";
import ShowUsers from "./components/ShowUsers.jsx";
import AddUserForm from "./components/AddUser.jsx";
import UpdateItemForm from "./components/UpdateUser.jsx";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [currUser, setCurrUser] = useState(null);
  const [editing, setEditing] = useState(false);

  
  const showUser = async () => {
    try {
      const res = await api.get("/users.php");
      setItems(res.data); 
    } catch (error) {
      console.error("Error fetching users:", error.message);
    }
  };

  
  const addUser = async (data) => {
    try {
      const res = await api.post("/add_update.php", data);
      if (res.status === 200) {
        showUser(); 
        console.log("User created successfully.");
      }
    } catch (error) {
      console.error("Error adding user:", error.message);
    }
  };

  
  const updateUser = async (data) => {
    try {
      const res = await api.put("/add_update.php", data);
      if (res.status === 200) {
        showUser(); 
        setEditing(false); 
        console.log("User updated successfully.");
      }
    } catch (error) {
      console.error("Error updating user:", error.message);
    }
  };

  
  const deleteUser = async (id) => {
    try {
      const res = await api.delete(`/add_update.php?id=${id}`);
      if (res.status === 200) {
        showUser(); 
        console.log("User deleted successfully.");
      }
    } catch (error) {
      console.error("Error deleting user:", error.message);
    }
  };

  
  useEffect(() => {
    showUser();
  }, []);

  return (
    <div className="container">
      <h1 className="title">CRUD Application</h1>
      {!editing ? (
        <>
          <div className="formSection">
            <AddUserForm addUser={addUser} />
          </div>
          <ShowUsers
            users={items}
            deleteUser={deleteUser}
            setCurrUser={setCurrUser}
            setEditing={setEditing}
          />
        </>
      ) : (
        <UpdateItemForm
          currentUser={currUser}
          updateUser={updateUser}
          setEditing={setEditing}
        />
      )}
    </div>
  );
};

export default App;
