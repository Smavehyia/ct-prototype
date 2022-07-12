import React, { useState } from "react";
import { validate, getAddressInfo } from "bitcoin-address-validation";

const AddWallet = ({ addAddress }) => {
  const [address, setAddress] = useState("");
  const [label, setLabel] = useState("");
  const [error, setError] = useState("");

  const handleAddAddress = (e) => {
    e.preventDefault();
    if (!addAddress(address, label)) {
      // if address was not added, it already exists
      setError("Address already exists");
      return;
    }
    setAddress("");
    setLabel("");
  };

  const validateAddress = (val) => {
    if (!validate(val)) {
      setError("Invalid Address");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <div className="page-title">
        <h3>Add Bitcoin Wallet Address</h3>
      </div>
      <form className="form">
        <div className="form-row">
          <div className="form-row-label">
            <label htmlFor="addr">Bitcoin Wallet Address</label>
          </div>
          <div className="form-row-input">
            <input
              type="text"
              name="addr"
              placeholder="Enter the wallet address..."
              className="text-input"
              value={address}
              onChange={(e) => {
                validateAddress(e.target.value);
                setAddress(e.target.value);
              }}
            />
            {error.length > 0 && <div className="error">{error}</div>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-row-label">
            <label htmlFor="label">Address Label</label>
          </div>
          <div className="form-row-input">
            <input
              type="text"
              name="label"
              placeholder="Choose a label for the address..."
              className="text-input"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <button
            className="add-button"
            onClick={handleAddAddress}
            disabled={error.length > 0}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddWallet;
