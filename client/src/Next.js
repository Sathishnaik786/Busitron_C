import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Next() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate(); // Hook for navigation

  const handleSendOtp = () => {
    if (phone.length === 10) {
      // Simulate API call for sending OTP
      console.log(`Sending OTP to ${phone}`);
      setStep(2);
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  const handleVerifyOtp = () => {
    if (otp.length === 6) {
      // Simulate API call for verifying OTP
      console.log(`Verifying OTP ${otp} for phone ${phone}`);
      alert("Login successful!");
      navigate('/payment'); // Redirect to the payment page after successful login
    } else {
      alert("Please enter a valid 6-digit OTP.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      {step === 1 && (
        <div style={styles.form}>
          <input
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleSendOtp} style={styles.button}>
            Send OTP
          </button>
        </div>
      )}
      {step === 2 && (
        <div style={styles.form}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleVerifyOtp} style={styles.button}>
            Verify OTP
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
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
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
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

export default Next;
