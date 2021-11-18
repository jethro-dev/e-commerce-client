import React, { useState } from "react";
import styled from "styled-components";
import { Announcement, Footer, Navbar } from "../components";
import { Add, Clear, Remove } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeAllProducts, removeProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Wrapper = styled.div`
  padding: 20px;
  max-width: 1300px;
  margin: 0 auto;
  min-height: 800px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
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
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 15px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  position: relative;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  & > * {
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColorText = styled.span`
  font-weight: 700;
  display: flex;
  align-items: center;
`;
const ProductColor = styled.div`
  margin-left: 5px;
  height: 15px;
  width: 15px;
  border-radius: 50px;
  background-color: ${({ color }) => color};
  border: lightgray 1px solid;
`;
const ProductSize = styled.span``;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({ marginBottom: "5px" })}
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
  font-weight: 200;
  font-size: 30px;
  ${mobile({ marginBottom: "10px" })}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  margin-bottom: 20px;
`;
const SummaryItem = styled.div`
  margin: 10px 0px;
  display: flex;
  justify-content: space-between;
`;
const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  padding: 10px;
  margin-top: 100px;
  font-weight: 600;
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

const ClearButton = styled(IconButton)`
  position: absolute !important;
  top: 5px !important;
  right: 1px !important;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClear = (e) => {
    console.log(e.currentTarget.value);
    dispatch(removeProduct(e.currentTarget.value));
  };

  return (
    <>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          {cart.products.length > 0 && (
            <Link to="/checkout">
              <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Link>
          )}
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product, index) => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.img} />

                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColorText>
                      Color:
                      <ProductColor color={product.color} />
                    </ProductColorText>
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ClearButton onClick={handleClear} value={index}>
                    <Clear />
                  </ClearButton>
                  <ProductAmountContainer>
                    <IconButton sx={{ color: "black" }}>
                      <Remove />
                    </IconButton>
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <IconButton>
                      <Add sx={{ color: "black" }} />
                    </IconButton>
                  </ProductAmountContainer>
                  <ProductPrice>
                    £ {Math.round(product.price * product.quantity * 100) / 100}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
          </Info>

          {cart.products.length > 0 && (
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>
                  £ {Math.round(cart.total * 100) / 100}
                </SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>£ 4.99</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>
                  £ {Math.round((cart.total > 50 ? 4.99 : 0) * 100) / 100}
                </SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText type="total">Total</SummaryItemText>
                <SummaryItemPrice>
                  £
                  {Math.round(
                    (cart.total > 50 ? cart.total : cart.total + 4.99) * 100
                  ) / 100}
                </SummaryItemPrice>
              </SummaryItem>
              <Link to="/checkout">
                <SummaryButton>CHECKOUT NOW</SummaryButton>
              </Link>
            </Summary>
          )}
        </Bottom>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Cart;
