import { useState } from "react";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/users/change-password", {
      method: "PUT",
      credentials: "include", // this is important if using sessions!
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ oldPassword, newPassword }),
    });

    const text = await res.text();
    setMessage(text);
  };

  return (
    <form onSubmit={handleChange}>
      <h2>Change Password</h2>
      <input
        type="password"
        placeholder="Old password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="New password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />
      <button type="submit">Update Password</button>
      <p>{message}</p>
    </form>
  );
}
