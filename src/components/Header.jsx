import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";

const user = useContext(AuthContext);

const Navbar = ({ user }) => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyApp</h2>

      <ul style={styles.menu}>
        <li style={styles.item}>Products</li>

     
        {user?.userType === "admin" && (
          <li style={styles.item}>Inventory</li>
        )}

      
        {!user ? (
          <>
            <li style={styles.item}>Login</li>
            <li style={styles.item}>Signup</li>
          </>
        ) : (
          <li style={styles.item}>Logout</li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

// Simple CSS (inline for easy understanding)
const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    background: "#222",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  menu: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
  },
  item: {
    cursor: "pointer",
  },
};