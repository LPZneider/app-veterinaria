import { Navbar } from "@/components/Navbar";
import { propsNavLogin } from "@/utilities/navProps";

import React from "react";
import "./Access.css";
export type LoginProp = {
  children?: React.ReactNode;
};

const Access: React.FC<LoginProp> = ({ children }: LoginProp) => {
  return (
    <article className="login home">
      <Navbar {...propsNavLogin} />
      <section className="luna-flex">
        <div className="div-luna">
          <img src="/public/assets/luna.png" alt="luna" className="luna" />
        </div>
        {children}
      </section>
    </article>
  );
};

export default Access;
