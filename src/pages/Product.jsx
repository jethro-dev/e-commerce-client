import { Add, Remove } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Announcement, Footer, Navbar, Newsletter } from "../components";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import axios from "../axios";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: "column", padding: "10px" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 700px;
  object-fit: cover;
  ${mobile({ height: "300px" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;

  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 200;
  ${mobile({ fontSize: "1.6rem" })}
`;

const Description = styled.p`
  margin: 20px 0;
  ${mobile({ fontSize: "1rem" })}
`;

const Price = styled.p`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0 15px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 7px;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin: 5px;
  cursor: pointer;
  border: lightgray 1px solid;
  transition: all 200ms ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;

const Select = styled.select`
  padding: 5px;
`;

const Option = styled.option``;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 15px;
  text-decoration: underline;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin: 30px 0;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: grid;
  place-items: center;
  margin: 0 5px;
`;
const Button = styled.button`
  border: 1.5px solid teal;
  padding: 15px 20px;
  background-color: #fff;
  color: #3a3a3a;
  cursor: pointer;
  border-radius: 3px;
  transition: all 200ms ease-in-out;
  ${mobile({ padding: "10px 15px" })}

  &:hover {
    background-color: teal;
    color: #fff;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  const handleQuantity = (type) => {
    switch (type) {
      case "inc":
        setQuantity(quantity + 1);
        break;
      case "dec":
        quantity > 1 && setQuantity(quantity - 1);
        break;
      default:
        setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    //update cart
    if (!color || !size) {
      setIsError(true);
      return;
    }
    dispatch(
      addProduct({
        ...product,
        quantity,
        color,
        size,
      })
    );
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`/products/find/${id}`);
        setProduct(res.data);
      } catch (err) {}
    };

    getProduct();
  }, [id]);

  return (
    <>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>{product.desc}</Description>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterText>Color</FilterText>
              {product?.color?.map((c) => (
                <FilterColor
                  key={c}
                  color={c}
                  onClick={() => setColor(c)}
                  style={{
                    border: color === c && "teal 2px solid",
                  }}
                />
              ))}
            </Filter>
            <Filter>
              <FilterText>Size</FilterText>
              <Select onChange={(e) => setSize(e.target.value)}>
                <Option value="">Size</Option>
                {product?.size?.map((size, index) => (
                  <Option key={index}>{size}</Option>
                ))}
              </Select>
            </Filter>
          </FilterContainer>
          {isError && (
            <ErrorMessage>please select a color and size</ErrorMessage>
          )}

          <AddContainer>
            <AmountContainer>
              <IconButton
                sx={{ color: "black" }}
                onClick={() => handleQuantity("dec")}
              >
                <Remove />
              </IconButton>
              <Amount>{quantity}</Amount>
              <IconButton
                sx={{ color: "black" }}
                onClick={() => handleQuantity("inc")}
              >
                <Add />
              </IconButton>
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Product;
