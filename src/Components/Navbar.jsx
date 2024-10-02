import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotalPrice } from "../Redux/cartSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary py-3 shadow-sm">
        <div className="container">
          {/* Logo or Brand */}
          <Link className="navbar-brand text-white fw-bold" to={"/"}>
            Redux-ToolKit
          </Link>

          {/* Toggler for Mobile View */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Center-aligned Navigation */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-white fw-bold fs-5" to={"/"}>
                  Cart Total: ₹ {totalPrice}
                </Link>
              </li>
            </ul>

            {/* Cart Button with Icon */}
            <div className="d-flex" >
              <Link to={"/cart"}  className="text-decoration-none">
                <button
                  type="button"
                  className="btn btn-outline-light position-relative d-flex align-items-center"
                >
                  <span className="material-symbols-outlined me-2">
                    shopping_cart
                  </span>
                  <span>Cart</span>
                  {cartItems.length > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartItems.length}
                    </span>
                  )}
                </button>
              </Link> 
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
