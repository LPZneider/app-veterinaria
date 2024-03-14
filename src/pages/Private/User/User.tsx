"use client";
import { Navbar } from "@/components/Navbar";
import { propsNavUser } from "@/utilities";
import React from "react";
import "./User.css";

export type UserProps = {
  // types...
};

const User: React.FC<UserProps> = ({}) => {
  return (
    <div className="user home">
      <Navbar {...propsNavUser} />
    </div>
  );
};

export default User;
