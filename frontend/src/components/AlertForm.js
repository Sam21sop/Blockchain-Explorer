import React, { useState } from 'react';

const AlertForm = ({ addAlert }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and send data to backend
    addAlert({ message });
    setMessage('');
  };

  return (
    <div>
      <h2>Create Alert</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Message:
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <button type="submit">Create Alert</button>
      </form>
    </div>
  );
};

export default AlertForm;
