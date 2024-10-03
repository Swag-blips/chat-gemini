import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="homepage">
      <img src="/orbital.png" alt="orbital-img" className="orbital" />
      <div className="left">
        <h1>LAMA AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          reiciendis id neque maxime quas voluptatem hic molestiae est nobis
          iure laboriosam pariatur, aperiam aspernatur, recusandae vero!
          Consequatur optio illo sapiente.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <figure className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
        </figure>
      </div>
    </div>
  );
};

export default Home;
