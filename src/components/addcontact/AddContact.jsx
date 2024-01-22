import React, { useState } from 'react';
import { FaCirclePlus } from 'react-icons/fa6';

const AddContactButton = () => {
  const [isFormOpen, setFormOpen] = useState(false);

  const handleButtonClick = () => {
    setFormOpen(true);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Implement logic to handle form submission
    // You can access form data from the state
    handleCloseForm();
  };

  return (
    <div>
      <button
        style={{
          background: 'transparent',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          fontSize: '40px', // Adjust the font size here
          color: '#6C6F75', // Set the text color
          marginTop: '10px', // Add margin top
        }}
        onClick={handleButtonClick}
      >
        <FaCirclePlus style={{ marginRight: '5px', fontSize: '40px', color: '#6C6F75' }} /> {/* Adjust the icon size and color here */}
        Add Contact
      </button>

      {isFormOpen && (
        <div>
          <form onSubmit={handleFormSubmit}>
            <label>
              Name:
              <input type="text" required />
            </label>
            <br />
            <label>
              Email:
              <input type="email" required />
            </label>
            <br />
            <label>
              Phone:
              <input type="tel" required />
            </label>
            <br />
            <button type="submit">Save Contact</button>
            <button type="button" onClick={handleCloseForm}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddContactButton;
