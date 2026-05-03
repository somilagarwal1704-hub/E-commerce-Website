import React, { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("User");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (password !== confirmPassword) {
      setError("Password do not match");
    } else {
      const newUser = { username, password, userType };
      localStorage.setItem("user", JSON.stringify(newUser));
      alert("Signup successful!");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setUserType("User");
      setError("");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div>
        <label>User Type:</label>
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      <button onClick={handleSignup}>Signup</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Signup;
