import React, { useState } from 'react';
import axios from 'axios';

const AddToWhatsAppGroup = () => {
  const [user, setUser] = useState({
    name: '',
    phoneNumber: '',
    // Other user information fields
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send user data to the backend API
    axios.post('/api/add-to-whatsapp-group', user)
      .then((response) => {
        console.log('User added to WhatsApp group');
        // Handle success, show success message, etc.
      })
      .catch((error) => {
        console.error('Failed to add user to WhatsApp group', error);
        // Handle error, show error message, etc.
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} />
      <input type="text" name="phoneNumber" placeholder="Phone Number" value={user.phoneNumber} onChange={handleChange} />
      {/* Other input fields for user information */}
      <button type="submit">Add to WhatsApp Group</button>
    </form>
  );
};

export default AddToWhatsAppGroup;
