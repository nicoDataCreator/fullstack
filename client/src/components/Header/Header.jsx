import React from "react";
import Nav from "../Header/Nav/Nav";
import Traductor from "./Traductor/Traductor"

const Header = () => {
  return (
    <section>
      <Traductor/>
      <Nav />
    </section>
  );
};

export default Header;
