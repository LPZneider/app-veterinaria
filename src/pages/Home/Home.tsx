"use client";
import React from "react";
import "./Home.css";
import { Login } from "../Login";

export type HomeProps = {
  // types...
};

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div className="home">
      Home works!
      <Login />
    </div>
  );
};

export default Home;
