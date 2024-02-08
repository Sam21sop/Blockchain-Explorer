import React from 'react';

const AddressDetails = ({ addressDetails }) => {
  return (
    <div>
      <h2>Address Details</h2>
      {addressDetails && (
        <div>
          <p>Address: {addressDetails.address}</p>
          <p>Balance: {addressDetails.balance}</p>
          {/* Add other address details */}
        </div>
      )}
    </div>
  );
};

export default AddressDetails;
