import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import styled from "styled-components";

import logo from "../assets/payment.svg";

const Container = styled.div`
  height: 600px;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: grid;
  padding: 20px;
  place-items: center;
`;

const LogoImage = styled.img`
  width: 100%;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  display: grid;
  place-items: center;
`;

const Form = styled.form`
  width: 100%;
  margin: 0 auto;
`;
const PayButton = styled.button`
  padding: 10px;
  margin: 20px auto;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
  border-radius: 3px;
  transition: all ease-in-out 200ms;
  border: none;
  outline: ${({ type }) => (type === "filled" ? "1px teal solid" : "none")};
  color: ${({ type }) => (type === "filled" ? "teal" : "#fff ")};
  background-color: ${({ type }) =>
    type === "filled" ? "transparent" : "teal"};

  &:hover {
    outline: ${({ type }) => (type === "filled" ? "none" : "1px teal solid")};
    color: ${({ type }) => (type === "filled" ? "#fff " : "teal")};
    background-color: ${({ type }) =>
      type === "filled" ? "teal" : "transparent"};
  }
`;

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000",
      },
    });

    console.log("btn pressed");
  };

  return (
    <Container>
      <Left>
        <LogoImage src={logo} />
      </Left>
      <Right>
        <Form onSubmit={handleSubmit}>
          <PaymentElement />
          <PayButton>Pay!</PayButton>
        </Form>
      </Right>
    </Container>
  );
};

export default CheckoutForm;
