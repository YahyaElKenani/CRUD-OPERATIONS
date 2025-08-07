import { useState } from "react";
import ReactDOM from "react-dom";
import { MdOutlineClose } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const UsersDetailsModel = ({ selecteduser, isOpen, setIsOpen }) => {
  const [passVisible, setPassVisible] = useState(false);
  const togglePass = () => {
    setPassVisible((prev) => !prev);
  };
  if (!isOpen) return null;
  const displayedUsers = [
    { label: "ID", value: selecteduser.id },
    { label: "Name", value: selecteduser.name },
    { label: "Email", value: selecteduser.email },
    { label: "Role", value: selecteduser.role },
    { label: "Password", value: selecteduser.password },
  ];
  return ReactDOM.createPortal(
    <>
      <div
        className="bg-black/60 fixed inset-0 z-[1000]"
        onClick={() => setIsOpen(false)}
      />
      <div className="bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] py-5 px-8 rounded-md w-[700px] flex flex-col justify-center gap-9">
        <div className="flex justify-between text-xl">
          <h1 className="font-semibold">Users Detaild</h1>
          <MdOutlineClose
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <img
          src={selecteduser.avatar}
          className="rounded-full w-[200px] m-auto"
        />
        <div className="flex flex-col  gap-2">
          {displayedUsers.map((user) => (
            <div
              key={user.value}
              className="flex-start py-3 gap-40 border-b border-b-gray-300 "
            >
              <p className="font-semibold">{user.label}</p>
              {user.label === "Password" ? (
                !passVisible ? (
                  "*".repeat(user.value.length)
                ) : (
                  <p>{user.value}</p>
                )
              ) : (
                <p>{user.value}</p>
              )}
              <div onClick={togglePass} className="cursor-pointer ">
                {user.label === "Password" &&
                  (!passVisible ? <FaRegEyeSlash /> : <FaRegEye />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default UsersDetailsModel;
