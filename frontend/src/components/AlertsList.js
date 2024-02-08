import React from 'react';

const AlertsList = ({ alerts }) => {
  return (
    <div>
      <h2>Alerts</h2>
      {alerts.map((alert) => (
        <div key={alert.id}>
          <p>{alert.message}</p>
          {/* Display other alert details */}
        </div>
      ))}
    </div>
  );
};

export default AlertsList;
