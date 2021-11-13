import React from "react";
import styled from "styled-components";
import { Announcement, Footer, Navbar } from "../components";
import { Add, Remove } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { mobile } from "../responsive";

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

const Cart = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />

                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColorText>
                    Color:
                    <ProductColor color="black" />
                  </ProductColorText>
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <IconButton>
                    <Add />
                  </IconButton>
                  <ProductAmount>2</ProductAmount>
                  <IconButton>
                    <Remove />
                  </IconButton>
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />

                <Details>
                  <ProductName>
                    <b>Product:</b> HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColorText>
                    Color:
                    <ProductColor color="black" />
                  </ProductColorText>
                  <ProductSize>
                    <b>Size:</b> 38
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <IconButton>
                    <Add />
                  </IconButton>
                  <ProductAmount>1</ProductAmount>
                  <IconButton>
                    <Remove />
                  </IconButton>
                </ProductAmountContainer>
                <ProductPrice>$ 120</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 150</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText type="total">Total</SummaryItemText>
              <SummaryItemPrice>$ 150</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECKOUT NOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Cart;
