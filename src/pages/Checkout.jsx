import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useSelector } from "react-redux";
import { Announcement, CheckoutForm, Footer, Navbar } from "../components";
import { resolvePath } from "react-router";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState("");
  const products = useSelector((state) => state.cart.products);

  useEffect(async () => {
    const res = await axios({
      method: "post",
      url: "http://localhost:5000/api/v1/payment",
      data: {
        products,
      },
    });

    setClientSecret(res.data.clientSecret);
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      <Navbar />
      <Announcement />
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
      <Footer />
    </>
  );
};

export default Checkout;
