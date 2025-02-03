import React from 'react';

function ContactInformation({ email, phone, address }) {
  return (
    <div className="div2">
      <h3>Contact Information</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
    </div>
  );
}

export default ContactInformation;