import { NavLink } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import TableUsers from "../Components/Users/TableUsers";

const Users = () => {
  return (
    <section className="bg-bgColor py-3 px-3.5">
      <header className="text-secondTextColor flex-start gap-1.5 text-[17px] mb-2">
        <NavLink to="/">Home</NavLink>
        <span className="text-xl">
          <MdKeyboardArrowRight />
        </span>
        <span>Users</span>
      </header>
      <div className="flex justify-between items-center pb-3 border-b border-gray-300">
        <h1 className="font-bold text-2xl">Users List</h1>
        <NavLink to="/users/create" className="btn hover:bg-amber-400">
          <div>
            <FaPlus />
          </div>
          <span className="hidden md:block">ADD NEW USERS</span>
        </NavLink>
      </div>
      <div className="overflow-auto">
        <TableUsers />
      </div>
    </section>
  );
};

export default Users;
