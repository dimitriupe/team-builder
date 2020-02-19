import React, { useState } from 'react';
import ReactDOM from "react-dom";
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "James Andrew",
      email: "j.andrew@gmail.com",
      role: "Data Scientist"
    }
  ]);

  const addNewTeamMember = teamMember => {
    const newTeamMember = {
      id: teamMember.id,
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role,
    };

    setTeamMembers([...teamMembers, newTeamMember]);
  };
  
  return (
    <div className="App">
      <h1>Team Members List</h1>
    </div>
  );
}

export default App;
