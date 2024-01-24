import React from "react";
import "./Home.css";
import Image from "./Image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./data";
import Product from "./Product";

function Home() {
  const products = productData.map((item) => (
    <Product
      key={item.id}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="home">
      <div className="welcome-message">
        <h1>
          <marquee>
            <span className="span--1">
              "Welcome To Keja Yangu, Your Comfort Our Priority"
            </span>
          </marquee>
        </h1>
      </div>

      <div className="product-carousel">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
        >
          {products}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
