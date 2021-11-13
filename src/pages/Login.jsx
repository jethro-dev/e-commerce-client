import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: grid;
  place-items: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 30%;
  min-width: 300px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin-bottom: 20px;
  padding: 10px;
  outline: none;
  border: 1px lightgray solid;

  &::placeholder {
    font-family: "Urbanist", sans-serif;
  }
`;

const Button = styled.button`
  width: 50%;
  border: none;
  padding: 12px 20px;
  margin: 0 auto 10px;
  cursor: pointer;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 3px;
  letter-spacing: 0.5px;
  transition: all 300ms ease-in-out;

  &:hover {
    outline: solid 1px teal;
    background-color: white;
    color: teal;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Link = styled.a`
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  color: black;
  transition: all ease-in-out 200ms;
  &:not(:last-child) {
    margin-bottom: 3px;
  }

  &:hover {
    color: teal;
  }
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOG IN</Button>
          <LinkContainer>
            <Link href="/about">Forgot password?</Link>
            <Link>Register</Link>
          </LinkContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
