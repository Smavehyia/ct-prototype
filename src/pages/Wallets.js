import React, { useEffect, useState } from "react";
import AddWallet from "../components/AddWallet";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const TEST_ADDRESSES = [
  { address: "3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd", label: "BTC Wallet 1" },
  {
    address: "bc1q0sg9rdst255gtldsmcf8rk0764avqy2h2ksqs5",
    label: "BTC Wallet 2",
  },
];

const Wallets = () => {
  const [addresses, setAddresses] = useState([]);

  const addAddress = (newAddress, newLabel) => {
    if (addresses.filter((a) => a.addAddress === newAddress)) {
      // already exists
      return false;
    }
    setAddresses([...addresses, { address: newAddress, label: newLabel }]);
    return true;
  };

  const deleteAddress = (addressToDelete) => {
    const filteredAddresses = addresses.filter(
      (a) => a.address !== addressToDelete.address
    );
    setAddresses(filteredAddresses);
  };

  useEffect(() => {
    setAddresses(TEST_ADDRESSES);
  }, []);

  return (
    <div>
      <AddWallet addAddress={addAddress} />
      <PageTitle title="Wallets" />
      <div className="table-section">
        <table className="table">
          <thead>
            <tr>
              <th>Bitcoin Wallet Address</th>
              <th>Address Label</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {addresses &&
              addresses.map((addr, i) => {
                return (
                  <tr key={i}>
                    {addr &&
                      Object.values(addr).map((colVal, i) => {
                        return (
                          <td
                            key={i}
                            onClick={(e) => console.log(e.target.textContent)}
                          >
                            {i === 0 ? (
                              <Link to={`/transactions/${colVal}`}>
                                {colVal}
                              </Link>
                            ) : (
                              colVal
                            )}
                          </td>
                        );
                      })}
                    <td>
                      <button onClick={() => deleteAddress(addr)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wallets;
