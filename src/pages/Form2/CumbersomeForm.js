import React, { useState } from "react";

function CumbersomeForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    // ... potentially many more individual properties
  });

  const handleChange = (e) => { 
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <label>First Name:</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <label>Last Name:</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label>Address:</label>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />
      {/* ... potentially many more individual input fields */}
    </>
  );
}

export default CumbersomeForm;