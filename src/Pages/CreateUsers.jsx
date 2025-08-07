import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateUsers = () => {
  const navigate = useNavigate();
  const [variables, setVariables] = useState({
    name: "",
    email: "admin@mail.com",
    role: "Admin",
    avatar: "https://i.pravatar.cc/300",
    pass: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/users",
        {
          email: variables.email,
          name: variables.name,
          password: variables.pass,
          avatar: variables.avatar,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success("Data submitted Successfully!");
      setTimeout(() => {
        navigate("/users");
        setVariables({
          name: "",
          email: "",
          role: "Admin",
          avatar: "https://i.pravatar.cc/300",
          pass: "",
        });
      }, 1500);
      console.log(response?.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-[#f7f7f7] min-h-screen py-8 px-9">
      <div
        className="flex flex-col gap-6 shadow-md px-7 py-9 rounded-md
"
      >
        <h1 className="text-3xl font-semibold">Create New User</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-start gap-8"
        >
          <div className="flex flex-col w-full">
            <label className="font-semibold">Name</label>
            <input
              value={variables.name}
              onChange={(e) =>
                setVariables({ ...variables, name: e.target.value })
              }
              required
              type="text"
              className="border rounded-sm py-2.5 px-3 w-full"
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="font-semibold">Email</label>
            <input
              required
              type="email"
              value={variables.email}
              onChange={(e) =>
                setVariables({ ...variables, email: e.target.value })
              }
              className="border rounded-sm py-2.5 px-3 w-full"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="font-semibold">Role</label>
            <select
              name="role"
              id="role"
              value={variables.role}
              onChange={(e) =>
                setVariables({ ...variables, role: e.target.value })
              }
              required
              className="border rounded-sm py-2.5 px-3 w-full"
            >
              <option value="admin">Admin</option>
              <option value="customer">Customer</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label className="font-semibold">Avatar</label>
            <input
              required
              type="url"
              onChange={(e) =>
                setVariables({ ...variables, avatar: e.target.value })
              }
              value={variables.avatar}
              className="border-2 border-dotted border-amber-400 rounded-sm py-2.5 px-3 w-full h-[50px] "
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="font-semibold">Password</label>
            <input
              required
              value={variables.pass}
              onChange={(e) =>
                setVariables({ ...variables, pass: e.target.value })
              }
              type="password"
              className="border rounded-sm py-2.5 px-3 w-full"
            />
          </div>

          <button type="submit" className="btn m-auto w-full py-3">
            Cretae User
          </button>
          <Toaster position="top-center" reverseOrder={false} />
        </form>
      </div>
    </div>
  );
};

export default CreateUsers;
