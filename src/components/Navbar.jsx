import React from "react";
import styled from "styled-components";
import { Badge } from "@mui/material";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;

  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  ${mobile({ padding: "10px 0" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding-left: 5px;
  padding-right: 5px;
  &::placeholder {
    font-family: "Urbanist", sans-serif;
  }

  ${mobile({ width: "50px", fontSize: "12px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled(Link)`
  font-weight: bold;
  color: black;
  text-decoration: none;
  font-size: 2rem;
  ${mobile({ fontSize: "24px", marginLeft: "5px" })}
  transition: 200ms all ease-in-out;

  &:hover {
    color: teal;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ justifyContent: "center", flex: "2" })}
`;

const MenuItem = styled(Link)`
  color: black;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  font-size: 1rem;
  transition: 200ms all ease-in-out;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}

  &:hover {
    color: teal;
  }
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const products = useSelector((state) => state.cart.products);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search sx={{ color: "gray", fontSize: "1rem;" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo to="/">LOGO.</Logo>
        </Center>
        <Right>
          <MenuItem to="/register">Register</MenuItem>
          <MenuItem to="/login">SIGN IN</MenuItem>

          <MenuItem to="/cart">
            <Badge badgeContent={quantity} color="secondary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
