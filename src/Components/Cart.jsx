import React from "react";
import { clearCart, selectCartItems } from "../Redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import "../index.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItem = useSelector(selectCartItems);

  console.log("Cart Item :-", cartItem);

  return (
    <>
      <div className="container text-center" style={{ width: "700px" }}>
        <div className="row pt-5  ">
          {cartItem.length == 0 && (
            <>
              <h1>Your cart is empty</h1>

              <div className="my-2">
                <Link to={"/"} className="btn btn-warning">
                  Continue Shopping....
                </Link>
              </div>
            </>
          )}

          {cartItem.map((item) => {
            return (
              <>
                <div className="" key={item.id}>
                  <div
                    className="card-bg card mb-3 rounded-3"
                    style={{ width: "650px" }}
                  >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={item.imgSrc}
                          className="img-fluid rounded-5 p-3"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text">{item.description}</p>
                          <p className="card-text">
                            <div className="d-flex flex-row justify-content-center">
                              <button href="#" className=" btn btn-primary">
                                ₹ {item.price}
                              </button>
                              <button href="#" className="btn btn-warning mx-3">
                                Buy Now
                              </button>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          {cartItem.length != 0 && (
            <div className="my-2">
              <button
                onClick={() => {
                  dispatch(clearCart());

                  toast.error("Cart Clear !", {
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
                }}
                className="btn btn-warning"
              >
                Clear Cart
              </button>
            </div>
          )}
              <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Cart;
