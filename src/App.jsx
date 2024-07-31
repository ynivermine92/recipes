import React, { useState, useEffect } from "react";
import Header from "./componets/Header/Header";
import Food from "./componets/Food/Food";
import Footer from "./componets/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Food />
      </main>
      <Footer />
    </>
  );
};

export default App;
