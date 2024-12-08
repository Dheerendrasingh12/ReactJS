import React from "react";
import "./Home.css";
import ECommerce from "../images/ecommerce.jpg";
import Product from "./Product";
import MacBook from "../images/macbook.jpg";
import Ipad from "../images/tab.jpg";
import BreifCase from "../images/Briefcase.jpeg";
import SeatCover from "../images/seat cover.jpg";
import Mat from "../images/mat.jpg";
import Oven from "../images/oven.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={ECommerce} alt="" className="home__image" />
        <div className="home__row">
          <Product
            id={1}
            title="Apple iPad (10th Generation): with A14 Bionic chip, 27.69 cm (10.9″) Liquid Retina Display, 64GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life – Blue"
            rating={4}
            price={37900}
            image={Ipad}
          />
          <Product
            id={2}
            title="Red Cherry 
17'' Inch Laptop Messenger Bag For Mens Expandable Features Swiss Security Lock Closure Small Travel Bag (Blue)"
            rating={4}
            price={4416}
            image={BreifCase}
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="PegasusPremium PU Leatherite Car Seat Cover for Mahindra XUV 700- 7 Seater (Black Color)"
            rating={5}
            price={11999}
            image={SeatCover}
          />
          <Product
            id={4}
            title="Pharaoh 3D Car Mat | Compatible with Mahindra XUV700 at 2020-2023 Odorless, Stylish, Eco-Friendly Floor Protection with Dust Collection Tray"
            rating={4}
            price={10000}
            image={Mat}
          />
          <Product
            id={5}
            title="LG 28 L Convection Microwave Oven (MC2846BV, Black, Auto Cook, Defrost, Indian Cuisine, Tandoor Se, Child Lock, Steam Cook & Stainless Steel Cavity)"
            rating={4}
            price={13000}
            image={Oven}
          />
        </div>
        <div className="home__row">
          <Product
            id={1}
            title="2022 Apple MacBook Air Laptop with M2 chip: 13.6-inch Liquid Retina Display, 16GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works"
            rating={5}
            price={99000}
            image={MacBook}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
