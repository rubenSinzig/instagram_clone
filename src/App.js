import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import PostNav from "./components/PostNav";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <div className="main-wrapper">
        <Header />
        <SubHeader />
        <PostNav />
        <Posts />
        <Footer />
      </div>
      <Banner />
    </React.Fragment>
  );
}

export default App;
