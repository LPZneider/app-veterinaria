"use client";
import { Navbar } from "@/components/Navbar";
import { propsNavHome } from "@/utilities/navProps";
import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <article className="home">
      <Navbar {...propsNavHome} />
      <section className="flex-container">
        <div className="mara1 flex-item">
          <img src="/public/assets/mara.png" alt="mara" className="mara" />
        </div>
        <h1 className="flex-item">
          En nuestras manos y corazón, la salud y bienestar de tu mejor amigo
        </h1>
      </section>
      <div className="contenido-main">
        Lorem ipsum dolor sit amet consectetur, adipisicing Necessitatibus
        molestiae tempore voluptas veritatis earum obcaecati culpa error ipsa
        reprehenderit deleniti doloribus, cum accusamus cupiditate vitae,
        impedit repellat natus vero numquam? Lorem ipsum dolor, sit amet itae,
        impedit repellat natus vero numquam? Lorem ipsum dolor, sit amet itae,
        <section className="servicios">
          <article className="article-servicio">
            <img
              src="/public/assets/salud.svg"
              alt="servicio1"
              className="servicio-imagen"
            />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing </h2>
          </article>
          <article className="article-servicio">
            <img
              src="/public/assets/productos.svg"
              alt="servicio1"
              className="servicio-imagen"
            />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing </h2>
          </article>
          <article className="article-servicio">
            <img
              src="/public/assets/hair.svg"
              alt="servicio1"
              className="servicio-imagen"
            />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing </h2>
          </article>
          <article className="article-servicio">
            <img
              src="/public/assets/correa.svg"
              alt="servicio1"
              className="servicio-imagen"
            />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing </h2>
          </article>
        </section>
      </div>
    </article>
  );
};

export default Home;
