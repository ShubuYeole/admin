"use client";// pages/ManageServices.js

import React, { useState } from 'react';

const ManageServices = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'Battery Swap', price: 50 },
    { id: 2, name: 'Car Wash', price: 20 }
  ]);

  const handleAddService = () => {
    // Logic to add a new service
  };

  const handleDeleteService = (id) => {
    // Logic to delete a service
  };

  return (
    <div>
      <h1>Manage Services</h1>
      <button onClick={handleAddService}>Add Service</button>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            {service.name} - ${service.price}
            <button onClick={() => handleDeleteService(service.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageServices;
