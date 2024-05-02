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
          En nuestras manos y corazón, la salud y el bienestar de tu mejor
          amigo.
        </h1>
      </section>
      <div className="contenido-main">
        En la mirada confiada de una mascota, encontramos un amor que trasciende
        las palabras. Su lealtad inquebrantable y su afecto incondicional nos
        enseñan a valorar los momentos simples y a abrazar la belleza de la
        conexión pura. En su compañía, encontramos consuelo, alegría y un
        recordatorio constante de la capacidad del amor para enriquecer nuestras
        vidas más allá de las palabras.
        <section className="servicios">
          <article className="article-servicio">
            <img
              src="/public/assets/salud.svg"
              alt="servicio1"
              className="servicio-imagen"
            />
            <h2>Porque las mascotas saludables son mascotas felices.</h2>
          </article>
          <article className="article-servicio">
            <img
              src="/public/assets/productos.svg"
              alt="servicio1"
              className="servicio-imagen"
            />
            <h2>Variedad de servicios para tu mejor amigo.</h2>
          </article>
          <article className="article-servicio">
            <img
              src="/public/assets/hair.svg"
              alt="servicio1"
              className="servicio-imagen"
            />
            <h2>
              Calidad y variedad en productos para el bienestar de tus mascotas.
            </h2>
          </article>
          <article className="article-servicio">
            <img
              src="/public/assets/correa.svg"
              alt="servicio1"
              className="servicio-imagen"
            />
            <h2>Fortalece el vínculo con nuestro adiestramiento experto.</h2>
          </article>
        </section>
      </div>
    </article>
  );
};

export default Home;
