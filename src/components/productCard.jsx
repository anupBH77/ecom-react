import React from "react";
import { styled } from "styled-components";
import { Rating } from "@mui/material";
import { FaRupeeSign } from "react-icons/fa";
const ProdCard = styled.div`
  width: 400px;
  position: relative;
  box-shadow: 0 2px 7px #dfdfdf;
  margin: 50px auto;
  background: #fafafa;
`;
const ProdThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  /* max-height: 10px; */
  padding: 50px;
`;
const ProdDetails = styled.div`
  padding: 30px;
`;
const ProdCat = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ccc;
  margin-bottom: 18px;
`;
const ProdBottomDetails = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  border-top: 1px solid #eee;
  padding-top: 20px;
`;
const ProdPrice = styled.div`
  font-size: 18px;
  color: #fbb72c;
  font-weight: 600;
`;
const Small = styled.small`
  font-size: 18px;
  color: #fbb72c;
  font-weight: 600;
  font-size: 80%;
  font-weight: 400;
  text-decoration: line-through;
  display: inline-block;
  margin-right: 5px;
`;
const IconContainer = styled.div`
  display: inline-block;
  margin-left: 5px;
  color: #e1e1e1;
  transition: 0.3s;
  font-size: 17px;
`;
const A = styled.a`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  /* text-transform: uppercase; */
  color: #686e77;
  font-weight: 300;
  margin-bottom: 5px;
`;
const P = styled.p`
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 18px;
  color: #999;
`;
const Cart = styled.button`
  cursor: pointer;
  width: 100%;
  margin-top: 5px;
  border: 1px solid #303030;
  padding: 14px 30px;
  border-radius: 10px;
  color: #fff;
  background: #303030;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  transition: 200ms;

  &:hover {
    background: #fff;
    color: #303030;
  }
`;

const ProductCard = ({ prodDetails }) => {
  const { image, description, category, price, title, rating } = prodDetails;
  return (
    <>
      <ProdCard>
        <ProdThumb>
          <img width={100} height={100} src={image}></img>
        </ProdThumb>
        <ProdDetails>
          <ProdCat>{category}</ProdCat>
          <h4>
            <A href="">{title}</A>
          </h4>
          {/* <P>{description}</P> */}
          <ProdBottomDetails>
            <div>
              <ProdPrice>
                <Small>${price + 5}</Small>
                {price}$
              </ProdPrice>
            </div>
            <div>
              <ProdCat>{rating.count} reviews</ProdCat>
              <Rating value={rating.rate}></Rating>
            </div>
          </ProdBottomDetails>
          <Cart>add to cart</Cart>
        </ProdDetails>
      </ProdCard>
    </>
  );
};

export default ProductCard;
