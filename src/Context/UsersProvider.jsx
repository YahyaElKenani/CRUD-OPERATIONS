import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/users?limit=11"
        );
        setUsers(response?.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllUsers();
  }, []);

  const updateProduct = async (id, updatedData) => {
    try {
      const response = await axios.put(
        `https://api.escuelajs.co/api/v1/products/${id}`,
        updatedData
      );
      console.log("Product updated:", response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UsersContext.Provider value={{ users, setUsers, updateProduct }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
