import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://photosbook.in/wp-content/uploads/royal-boys-dp_51.webp"; // Placeholder image
  const name = "Rishi";
  const email = "rishiiii@example.com";
  const phone = "980574284949";
  const address = "123 Main Street, City, India";

  return (
    <div style={{ 
      backgroundColor: "white", 
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
      borderRadius: "5px", 
      padding: "10px", 
      width: "300px", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      border: "1px solid #ddd" 
    }}>
      <img 
        src={profilePhoto} 
        alt="Profile" 
        style={{ width: "100px", height: "100px", borderRadius: "50%", marginBottom: "15px" }}
      />
      <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#333" }}>Name: {name}</h2>
      <p style={{ color: "#666", margin: "5px 0" }}>Email: {email}</p>
      <p style={{ color: "#666", margin: "5px 0" }}>Phone no.: {phone}</p>
      <p style={{ color: "#666", textAlign: "center", marginTop: "10px" }}>Address: {address}</p>
    </div>
  );
};

export default Usercard;
