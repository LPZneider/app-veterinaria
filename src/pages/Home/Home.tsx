"use client";
import React from "react";
import "./Home.css";
import { Login } from "../Login";
import { Navbar } from "@/components/Navbar";

export type HomeProps = {
  // types...
};

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <article className="home">
      <Navbar />
      <h1>
        En nuestras manos y corazón, la salud y bienestar de tu mejor amigo
      </h1>
      <img src="/src/assets/mara.png" alt="mara" className="mara" />
      <div className="mara1"></div>
      <div className="contenido-main">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus
        molestiae tempore voluptas veritatis earum obcaecati culpa error ipsa
        reprehenderit deleniti doloribus, cum accusamus cupiditate vitae,
        impedit repellat natus vero numquam? Lorem ipsum dolor, sit amet itae,
        impedit repellat natus vero numquam? Lorem ipsum dolor, sit amet itae,
      </div>
      <section className="servicios">
        <article className="article-servicio">
          <img
            src="/src/assets/salud.svg"
            alt="servicio1"
            className="servicio-imagen"
          />
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
        </article>
        <article className="article-servicio">
          <img
            src="/src/assets/productos.svg"
            alt="servicio1"
            className="servicio-imagen"
          />
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
        </article>
        <article className="article-servicio">
          <img
            src="/src/assets/hair.svg"
            alt="servicio1"
            className="servicio-imagen"
          />
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
        </article>
        <article className="article-servicio">
          <img
            src="/src/assets/correa.svg"
            alt="servicio1"
            className="servicio-imagen"
          />
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
        </article>
      </section>
    </article>
  );
};

export default Home;
