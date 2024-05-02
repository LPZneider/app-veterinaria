"use client";
import { Navbar } from "@/components/Navbar";
import { propsNavUser } from "@/utilities";
import React from "react";
import "./User.css";
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";

const User: React.FC = () => {
  const userState = useSelector((store: AppStore) => store.user);

  return (
    <div className=" home">
      <Navbar {...propsNavUser} />
      <section className="user">
        <h1 className="titulo__user">
          Bienvenido, {userState.nombre}, a Mara, el sitio de veterinarias,
          servicios y productos.
        </h1>
        <div className="div-emma">
          <img src="/public/assets/emma.svg" alt="luna" className="emma" />
        </div>
      </section>
    </div>
  );
};

export default User;
