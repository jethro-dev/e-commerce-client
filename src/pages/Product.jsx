import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { Announcement, Footer, Navbar, Newsletter } from "../components";
import { mobile } from "../responsive";

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
  margin: 30px 0px;
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
  margin-left: 5px;
  cursor: pointer;
`;

const Select = styled.select`
  padding: 5px;
`;

const Option = styled.option``;

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
  return (
    <>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Description>
            The jumpsuits simplify everyday dressing. This 'Rulebreaker' style
            is cut from denim blended with a touch of stretch for flexibility
            and has flared hems which nod to the '70s. Underpin yours with
            boots.
          </Description>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterText>Color</FilterText>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterText>Size</FilterText>
              <Select>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
              </Select>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Product;
