import React from "react";
import { Products } from "../data";
import "../index.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, selectCartItems } from "../Redux/cartSlice";
import { ToastContainer, toast , Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  const dispatch = useDispatch();

  const cartItem = useSelector(selectCartItems);

  console.log("Cart Items :- ",cartItem);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));

    toast.success('Items added to the cart', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  };

  return (
    <>
    <ToastContainer 

    />
      <div className="container">
        <div className="row">
          {Products.map((item) => {
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-12  text-center mt-5"
                key={item.id}
              >
                <div
                  className="card card-bg align-items-center p-3 rounded-4"
                  style={{ width: "288px", height: "450", margin: "auto" }}
                >
                  <img
                    src={item.imgSrc}
                    width="150"
                    height="150"
                    className="img-fluid rounded-5"
                    alt="..."
                    style={{
                      objectFit: "cover",
                      height: "250px",
                      width: "250px",
                      borderRadius: "10px",
                    }} // Ensures all images have the same size and maintain aspect ratio
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bolder">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <div className="d-flex justify-content-around">
                      <button href="#" className="btn btn-primary">
                        ₹ {item.price}
                      </button>
                      <button
                        href="#"
                        className="btn btn-warning"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
