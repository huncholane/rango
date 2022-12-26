import React from "react";
import fetcher from "../django/api";

const Users = () => {
  const listUsers = fetcher.path("/api/user/").method("get").create();
  listUsers({}).then((data) => {
    console.log(data);
  });
  return <div>Users</div>;
};

export default Users;
