import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form.js"
import MemberList from "./components/MemberList.js"

function App() {
    
  const [teamMembers, setTeamMembers] = useState([]);

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
      <h1>Members List</h1>
      <Form addNewTeamMember={addNewTeamMember}/>
      <MemberList teamMembers={teamMembers}/>
    </div>
  );
}

export default App;
