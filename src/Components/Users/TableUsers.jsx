import axios from "axios";
import { useContext, useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import styles from "./Users.module.css";
import { UsersContext } from "../../Context/UsersProvider";
import UsersDetailsModel from "./UsersDetailsModel";
import Navbar from "../Navbar";

const TableUsers = () => {
  const { users } = useContext(UsersContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <div className="flex">
      <Navbar />
      <table className={`${styles.userTable} mt-6 `}>
        <thead>
          <tr className="text-[#a09f9f]">
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className="flex-center md:block">
                <IoEyeSharp
                  onClick={() => {
                    setIsOpen(true);
                    setSelectedUser(user);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <UsersDetailsModel
        selecteduser={selectedUser}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default TableUsers;
