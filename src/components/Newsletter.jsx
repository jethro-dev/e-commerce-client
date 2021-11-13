import React from "react";
import styled from "styled-components";
import { Send } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  min-height: 600px;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  text-align: center;
  ${mobile({ fontSize: "32px" })}
`;
const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  text-align: center;
  ${mobile({ fontSize: "16px" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({
    width: "80%",
  })}
`;
const Input = styled.input`
  border: none;
  outline: none;
  height: 100%;
  font-size: 1.1rem;
  flex: 8;
  padding-left: 15px;
  padding-right: 10px;
  background-color: #fff;

  &::placeholder {
    font-family: "Urbanist", sans-serif;
  }
`;
const Button = styled.button`
  flex: 1;
  height: 100%;
  border: none;
  background-color: teal;
  color: white;
  transition: 300ms all ease-in-out;

  &:hover {
    color: teal;
    background-color: #fff;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Get timely updates from your favourite products.
      </Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send></Send>
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
