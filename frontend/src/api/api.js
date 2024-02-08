const BASE_URL = 'http://localhost:8080'; // Replace with your backend URL

export const getAddressDetails = async (address) => {
  const response = await fetch(`${BASE_URL}/api/address/${address}`);
  const data = await response.json();
  return data;
};

export const getAlerts = async () => {
  const response = await fetch(`${BASE_URL}/api/alerts`);
  const data = await response.json();
  return data;
};

export const createAlert = async (newAlert) => {
  const response = await fetch(`${BASE_URL}/api/alerts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newAlert),
  });
  const data = await response.json();
  return data;
};
