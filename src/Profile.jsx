import React from 'react';

function Profile({ name, description, pics }) {
  return (
    <div className="div1">
      <a href="https://vite.dev" target="_blank">
        <img src={pics} className="logo" alt="Vite" />
      </a>
      <h2>Quennie Sofia A. Bolante</h2>
      <p>A passionate wed developer who loves creating beautiful UIs.</p>
      <p>BSIT2-A</p> 
    </div>
  );
}

export default Profile;