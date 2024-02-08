
import React, { useState, useEffect } from 'react';
import AlertsList from '../components/AlertsList';
import AlertForm from '../components/AlertForm';
import { getAlerts, createAlert } from '../api'; // Implement these functions to fetch and create alerts

const AlertView = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Fetch alerts from the backend
    getAlerts().then((data) => setAlerts(data));
  }, []);

  const handleAddAlert = (newAlert) => {
    // Send new alert to the backend
    createAlert(newAlert).then(() => {
      // Update the local state to reflect the change
      setAlerts([...alerts, newAlert]);
    });
  };

  return (
    <div>
      <h1>Alert View</h1>
      <AlertForm addAlert={handleAddAlert} />
      <AlertsList alerts={alerts} />
    </div>
  );
};

export default AlertView;
