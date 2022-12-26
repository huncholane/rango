import React from "react";
import { user } from "../api";

type Props = {
  children?: React.ReactNode;
  className?: string;
  user: user;
};

const User = (props: Props) => {
  const { first_name, last_name, email, username } = props.user;
  return (
    <tr>
      <td>{username}</td>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{email}</td>
    </tr>
  );
};

export default User;
