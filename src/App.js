import React, { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Gallery from "./components/Gallery";
import Suggestions from "./components/Suggestions";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <div className="main-wrapper">
        <Header />
        <SubHeader />
        <Gallery />
        <Suggestions />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
