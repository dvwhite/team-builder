import React, { useState } from 'react';

const Form = (props) => {
  const [teamMember, setTeamMember] = useState({'name': "", 'email': "", 'role': ""});
  const {teamMembers, setTeamMembers} = props;

  const handleChange = event => {
    setTeamMember({...teamMember, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault();
    setTeamMembers([...teamMembers, teamMember]);
    console.log(teamMembers)
    setTeamMember({'name': "", 'email': "", 'role': ""});
  }

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={teamMember.name}
          onChange={event => handleChange(event)}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={teamMember.email}
          onChange={event => handleChange(event)}
        />
      </label>
      <label>
        Role:
        <input
          type="text"
          name="role"
          value={teamMember.role}
          onChange={event => handleChange(event)}
        />
      </label>
      <button>Submit!</button>
    </form>
  );
}

export default Form;
