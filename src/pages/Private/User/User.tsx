"use client";
import { Navbar } from "@/components/Navbar";
import { propsNavUser } from "@/utilities";
import React from "react";
import "./User.css";

const User: React.FC = () => {
  return (
    <div className="user home">
      <Navbar {...propsNavUser} />
    </div>
  );
};

export default User;
