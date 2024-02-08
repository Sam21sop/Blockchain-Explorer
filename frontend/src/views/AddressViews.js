import React, { useState, useEffect } from 'react';
import AddressDetails from '../components/AddressDetails';
import { getAddressDetails } from '../api'; // Implement this function to fetch data from your backend

const AddressView = ({ match }) => {
  const [addressDetails, setAddressDetails] = useState(null);

  useEffect(() => {
    // Fetch address details from the backend based on the address in the URL
    getAddressDetails(match.params.address).then((data) => setAddressDetails(data));
  }, [match.params.address]);

  return (
    <div>
      <h1>Address View</h1>
      <AddressDetails addressDetails={addressDetails} />
    </div>
  );
};

export default AddressView;
