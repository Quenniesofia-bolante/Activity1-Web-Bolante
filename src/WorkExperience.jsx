import React from 'react';

function WorkExperience({ experiences }) {
  return (
    <div className="div4">
      <h3>Work Experience</h3>
      {experiences.map((experience, index) => (
        <div key={index}>
          <p>{experience.title}</p>
          <p>{experience.description}</p>
        </div>
      ))}
    </div>
  );
}

export default WorkExperience;