import React, {useState} from "react";
import './Form.css';

const Form = props => {

    const [teamMembers, setTeamMembers] = useState([
      {
        id: "",
        name: "",
        email: "",
        role: ""
      }
    ]);

    const handleChanges = event => {
        console.log("event", event.target.value);
        console.log("name", event.target.name);

        setTeamMembers({ ...teamMembers, [event.target.name]: event.target.value });
    
    };

    console.log("teamMembers", teamMembers);

    const submitForm = event => {
        console.log("submitting!");
        event.preventDefault();
        props.addNewTeamMember(teamMembers);
        setTeamMembers({ name: "", email: "", role: "" });
      };

    return (
      <form onSubmit={submitForm}>
      
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder={`Enter member name`}
          id="name"
          name="name"
          value={teamMembers.name}
          onChange={handleChanges}
        />
      
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder={`Enter member email address`}
          id="email"
          name="email"
          value={teamMembers.email}
          onChange={handleChanges}
        />

        <label htmlFor="role">Role</label>
        <input
          type="text"
          placeholder={`Enter member role`}
          id="role"
          name="role"
          value={teamMembers.role}
          onChange={handleChanges}
        />

        <button type="submit">Add member</button>
    </form>
    );
};

export default Form;