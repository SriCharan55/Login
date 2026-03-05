import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    //localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      
      {/* Navbar */}
      <div style={styles.navbar}>
        <h3 style={{margin:0}}>Dashboard</h3>

        <div style={styles.userSection}>
          <span style={styles.username}>{username}</span>
          <button style={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Welcome Card */}
      <div style={styles.card}>
        <h1>Welcome, {username}! </h1>
        <p>You have successfully logged in.</p>
      </div>

    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    fontFamily: "Arial"
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "white",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  },

  userSection: {
    display: "flex",
    alignItems: "center",
    gap: "15px"
  },

  username: {
    fontWeight: "bold"
  },

  logoutBtn: {
    padding: "8px 15px",
    border: "none",
    borderRadius: "6px",
    background: "#ff4d4d",
    color: "white",
    cursor: "pointer"
  },

  card: {
    margin: "120px auto",
    background: "white",
    padding: "40px",
    width: "400px",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
  }
};

export default Welcome;