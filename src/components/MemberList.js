import React from "react";

const MemberList = props => {
  return (
    <div className="member-list">
      {props.teamMembers.map(teamMember => (
        <div className="team-member" key={teamMember.id}>
            <h2>{teamMember.name}</h2>
            <h3>{teamMember.email}</h3>
            <h4>{teamMember.role}</h4>
        </div>
      ))}
    </div>
  );
};

export default MemberList;
