// CustomerContext.js
import React, { createContext, useContext, useState } from "react";

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customerId, setCustomerId] = useState(null);

  return (
    <CustomerContext.Provider value={{ customerId, setCustomerId }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomer = () => useContext(CustomerContext);
