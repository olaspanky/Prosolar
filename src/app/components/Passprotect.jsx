import { useState, useEffect } from "react";

const PasswordProtect = ({ children }) => {
  const [password, setPassword] = useState(""); // Password input state
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to check if the user is authenticated
  const [errorMessage, setErrorMessage] = useState(""); // Error message if password is wrong

  // Check localStorage for authentication status
  useEffect(() => {
    const isUserAuthenticated = localStorage.getItem("isAuthenticated");
    if (isUserAuthenticated === "true") {
      setIsAuthenticated(true); // User has already authenticated
    }
  }, []);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Handle password input change
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    
    // Hardcoded password
    const correctPassword = "Prosolar2024#";

    if (password === correctPassword) {
      setIsAuthenticated(true); // Correct password, grant access
      localStorage.setItem("isAuthenticated", "true"); // Store the flag in localStorage
    } else {
      setErrorMessage("Incorrect password! Please try again."); // Show error message if incorrect
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="password-page h-screen flex items-center justify-center">
        <div>
        <h2>Please enter the password</h2>
        <form onSubmit={handlePasswordSubmit}>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password"
            className="border p-2"
            required
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2">Submit</button>
        </form>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>
       
      </div>
    );
  }

  return <>{children}</>; // Return the protected content once authenticated
};

export default PasswordProtect;
