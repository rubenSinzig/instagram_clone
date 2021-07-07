import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Gallery from "./components/Gallery";
import Posts from "./components/Posts";
import Suggestions from "./components/Suggestions";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <div className="main-wrapper">
        <Header />
        <SubHeader />
        <Gallery />
        <Posts />
        <Suggestions />
        <Footer />
      </div>
      <Banner />
    </React.Fragment>
  );
}

export default App;
