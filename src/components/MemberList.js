import React from "react";
import './MemberList.css';

const MemberList = props => {
  return (
    <div className="member-list">
      {props.teamMembers.map(teamMember => (
        <div className="team-member" key={teamMember.id}>
            <h2>{teamMember.name}</h2>
            <h3>{teamMember.email}</h3>
            <h3>{teamMember.role}</h3>
        </div>
      ))}
    </div>
  );
};

export default MemberList;
