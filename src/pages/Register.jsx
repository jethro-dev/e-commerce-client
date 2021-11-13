import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: grid;
  place-items: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  min-width: 300px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 8px 0px 0px;
  padding: 10px;
  outline: none;
  border: 1px lightgray solid;

  &::placeholder {
    font-family: "Urbanist", sans-serif;
  }
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  margin-top: 10px;
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

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
