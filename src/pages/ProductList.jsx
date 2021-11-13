import React from "react";
import styled from "styled-components";
import {
  Announcement,
  Navbar,
  Products,
  Newsletter,
  Footer,
} from "../components";
import { mobile } from "../responsive";

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0 20px" })}
`;

const FilterText = styled.span`
  font-style: 20px;
  font-weight: 600;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const Select = styled.select`
  padding: 10px;

  &:not(:last-child) {
    margin-right: 20px;
    ${mobile({ marginBottom: "5px" })}
  }
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductList;