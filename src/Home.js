import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home_container">
          <img
            src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
            alt=""
            className="home_image"
          />

          <div className="home_row">
            <Product
              id="12321341"
              title="Bennett Mystic 15.6 inch Laptop Shoulder Messagenr Sling Office Bag Water"
              price={11.96}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            />
            <Product
              id="12321342"
              title="Laptop Shoulder Messagenr Sling Toy Box"
              price={59.96}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            />
            
          </div>
          <div className="home_row">
            <Product
              id="12321343"
              title="Bennett Mystic 15.6 inch Laptop Shoulder Messagenr Sling Office Bag Water"
              price={20.96}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            />
            <Product
              id="12321344"
              title="Bennett Mystic 15.6 inch Laptop Shoulder Messagenr Sling Office Bag Water"
              price={90.0}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            />
            <Product
              id="12321345"
              title= "Repellent Fabric for Men and Women (Blue)"
              price={33.96}
              rating={2}
              image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            />
          </div>
          <div className="home_row">
            <Product
              id="12321346"
              title="Bennett Mystic 15.6 inch Laptop Shoulder Messagenr Sling Office Bag Water"
              price={18.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
