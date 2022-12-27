import React, { useState, useEffect, useRef, SyntheticEvent } from "react";
import { UserService } from "../api";
import { user } from "../api/models/user";
import User from "../components/User";

const Users = () => {
  const [users, setUsers] = useState(Array<user>);
  const username = useRef<HTMLInputElement>(null);
  const first_name = useRef<HTMLInputElement>(null);
  const last_name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const loadUsers = () => {
    UserService.listUsers().then((users) => {
      setUsers(users);
    });
  };

  const createUser = (e: SyntheticEvent) => {
    e.preventDefault();
    UserService.createUser({
      username: username.current?.value || "",
      first_name: first_name.current?.value,
      last_name: last_name.current?.value,
      email: email.current?.value,
      password: password.current?.value || "",
    })
      .then(() => {
        loadUsers();
      })
      .catch((reason) => {
        console.log("you cant do that");
      });
  };

  useEffect(loadUsers, []);
  return (
    <div className="w-3/4 mx-auto mt-5">
      <form onSubmit={createUser} className="flex justify-evenly">
        <input
          className="border-2"
          type="text"
          ref={username}
          placeholder="Username"
          required
        />
        <input
          className="border-2"
          type="text"
          ref={first_name}
          placeholder="First Name"
        />
        <input
          className="border-2"
          type="text"
          ref={last_name}
          placeholder="Last Name"
        />
        <input
          className="border-2"
          type="email"
          ref={email}
          placeholder="Email"
        />
        <input
          className="border-2"
          type="password"
          ref={password}
          placeholder="Password"
        />
        <input
          type="submit"
          className="w-44 rounded-full bg-blue-600 hover:cursor-pointer text-white"
          value="Create User"
        />
      </form>
      <table className="w-full">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <User key={i} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
