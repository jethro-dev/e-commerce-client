import React, { useState } from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;

  position: relative;
  overflow: hidden;

  ${mobile({ display: "none" })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50px;
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ direction }) => direction === "left" && "10px"};
  right: ${({ direction }) => direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  transition: all 300ms ease-in-out;
  z-index: 2;

  &:hover {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${({ slideIndex }) => slideIndex * -100}vw);
  transition: all 1500ms ease-in-out;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${({ bg }) => bg};
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  margin: auto;
  display: block;
  margin-top: 50px;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px 15px;
  font-size: 1.15rem;
  cursor: pointer;
  background-color: teal;
  color: white;
  transition: all 300ms ease-in-out;
  border: none;
  border-radius: 25px;
  &:hover {
    background-color: white;
    color: #2c0000;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    switch (direction) {
      case "left":
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        break;
      case "right":
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        break;
      default:
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        break;
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined fontSize="large" />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => {
          const { id, img, title, desc, bg } = item;
          return (
            <Slide bg={bg} key={id}>
              <ImageContainer>
                <Image src={img} />
              </ImageContainer>
              <InfoContainer>
                <Title>{title}</Title>
                <Description>{desc}</Description>
                <Button>SHOP NOW</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined fontSize="large" />
      </Arrow>
    </Container>
  );
};

export default Slider;
