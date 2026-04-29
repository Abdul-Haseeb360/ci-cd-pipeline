"use client";
import { useState } from "react";
import { checkPasswordStrength } from "../utils/password";
function PasswordChecker() {
  const [password, setPassword] = useState("");
  const strength = checkPasswordStrength(password);
  return (
    <div>
      <input
        type="password"
              placeholder="Enter Password to check strength"
              className="border-2 border-gray-300 rounded p-2 w-full my-4 "
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>Password Strength: {strength}</p>
    </div>
  );
}

export default PasswordChecker;
