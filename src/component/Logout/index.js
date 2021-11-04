import React from "react";

const LogOut = () => {
  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("password");
    window.location.reload();
  };
  return (
    <button onClick={handleLogout} className="logout-button">
      LogOut
    </button>
  );
};

export default LogOut;
