import React, { useState } from "react";

function Payment() {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Payment Method: ${selectedMethod}\nDetails: ${details}`);
  };

  return (
    <div style={styles.container}>
      <h2>Payment Method</h2>
      <p>Choose your preferred payment method:</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* UPI Option */}
        <div style={styles.paymentOption}>
          <input
            type="radio"
            id="upi"
            name="paymentMethod"
            value="UPI"
            onChange={() => setSelectedMethod("UPI")}
            style={styles.radio}
          />
          <label htmlFor="upi" style={styles.label}>UPI</label>
        </div>

        {/* Credit Card Option */}
        <div style={styles.paymentOption}>
          <input
            type="radio"
            id="creditCard"
            name="paymentMethod"
            value="Credit Card"
            onChange={() => setSelectedMethod("Credit Card")}
            style={styles.radio}
          />
          <label htmlFor="creditCard" style={styles.label}>Credit Card</label>
        </div>

        {/* Debit Card Option */}
        <div style={styles.paymentOption}>
          <input
            type="radio"
            id="debitCard"
            name="paymentMethod"
            value="Debit Card"
            onChange={() => setSelectedMethod("Debit Card")}
            style={styles.radio}
          />
          <label htmlFor="debitCard" style={styles.label}>Debit Card</label>
        </div>

        {/* Payment Details Input */}
        <div style={styles.inputContainer}>
          <input
            type="text"
            placeholder={`Enter ${selectedMethod} details`}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            style={styles.input}
            disabled={!selectedMethod}
          />
        </div>

        <button type="submit" style={styles.button} disabled={!selectedMethod || !details}>
          Confirm Payment
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  paymentOption: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "18px",
  },
  radio: {
    marginTop: "0.3rem",
  },
  label: {
    fontSize: "16px",
    cursor: "pointer",
  },
  inputContainer: {
    marginTop: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "100%",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "white",
    cursor: "pointer",
  },
};

export default Payment;
