import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const Transactions = () => {
  const { id } = useParams();
  const [transactions, setTransactions] = useState([]);
  const [finalBalance, setFinalBalance] = useState("");

  useEffect(() => {
    axios
      .get(`https://blockchain.info/rawaddr/${id}`)
      .then((res) => {
        setFinalBalance(res.data.finalBalance);
        setTransactions(res.data.txs);
      })
      .catch((e) => console.error(e));
  }, [id]);

  return (
    <div>
      <PageTitle title={`Transactions For: ${id}`} />
      <h2>Final Balance: {finalBalance}</h2>
      <div className="table-section">
        <table className="table">
          <thead>
            <tr>
              <th>Transaction Hash</th>
              <th>Balance</th>
              <th>Fee</th>
            </tr>
            {transactions &&
              transactions.map((transaction, i) => {
                return (
                  <tr key={i}>
                    <td>{transaction.hash}</td>
                    <td>{transaction.balance}</td>
                    <td>{transaction.fee}</td>
                  </tr>
                );
              })}
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
