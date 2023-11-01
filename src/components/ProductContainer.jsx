import { styled } from "styled-components";
import ProductCard from "./productCard"
import BasicSelect from "./sort";
import { Pagination } from "@mui/material";
// import { Sort } from "@mui/";

const ProductContainer=({productData,setPage,page})=>{
    const Container= styled.div`
   
        display: flex;
        /* flex-flow:wrap; */
        background-color: #ededed;
        display: flex;
  flex-flow: row wrap; /* Use flex-flow-wrap to control wrapping */
  justify-content: flex-start; /* Align items along the main axis to the start */
  align-items: flex-start;
        
        
    `
     const handleChange = (event, value) => {
        setPage(value);
      };
    return (
        <div className=" flex flex-col items-center gap-2">
            <div>

        <Container>
            {productData.map((prod)=><ProductCard key={prod.id} prodDetails={prod} />)}
        </Container>
            </div>
            <div>
                
        <Pagination count={2} page={page} onChange={handleChange} variant="outlined" color="primary" />   
            </div>

        </div>
    )
}
export default ProductContainer;