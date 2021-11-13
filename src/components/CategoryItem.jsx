import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  position: relative;
  ${mobile({ margin: "0px" })}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(${({ isHover }) => (isHover ? 50 : 100)}%);
  transition: all 500ms ease-in-out;

  ${mobile({ filter: "brightness(0.8)", height: "30vh", minHeight: "250px" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  opacity: ${({ isHover }) => (isHover ? 1 : 0)};
  transition: opacity 300ms ease-in-out;

  ${mobile({ opacity: "1" })}
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;

const Button = styled.button`
  border: none;
  padding: 15px 30px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-weight: 500;
  transition: all 300ms ease-in-out;

  &:hover {
    padding: 15px 60px;
    background-color: white;
    color: teal;
    letter-spacing: 3px;
    font-weight: 500;
  }
`;

const CategoryItem = ({ img, title }) => {
  const [isHover, setIsHover] = useState(false);
  const handleHover = (e) => {
    setIsHover(true);
  };
  const handleLeave = (e) => {
    setIsHover(false);
  };

  return (
    <Container onMouseOver={handleHover} onMouseLeave={handleLeave}>
      <Image src={img} isHover={isHover} />
      <Info isHover={isHover}>
        <Title>{title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
