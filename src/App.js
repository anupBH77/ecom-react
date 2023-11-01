import logo from "./logo.svg";
import "./App.css";
import SearchAppBar from "./components/appBar";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductContainer from "./components/ProductContainer";
import SortBox from "./components/sort";
import { styled } from "styled-components";
import Spinner from "./components/spinner";
import PuffLoader from "react-spinners/PuffLoader";
import SpinnerContainer from "./components/spinner";
import { Pagination } from "@mui/material";
import CatagoryBox from "./components/catagorySelector";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption,setSelectedOption]= useState('all');
  const [prodData, setProdData] = useState(null);
  const [sortSelected, setSortSelected] = useState(null);
  const [page,setPage] = useState(1);
  const [options,setOptions] = useState(undefined);
  useEffect(() => {
    let url 
    const fetchData = async () => {
      setIsLoading(true);
      if(selectedOption!=null && selectedOption.length>0 && selectedOption!=="all"){
        
         url = `https://fakestoreapi.com/products?limit=${10*page}/category/${selectedOption}`
      }
      else{
        url = `https://fakestoreapi.com/products?limit=${10*page}`
      }
      const resp = await axios.get(
        url
      );
      const prodData = [];
      
      
      const catOptionsResp = await axios.get("https://fakestoreapi.com/products/categories")
      const catOptions = ["all",...catOptionsResp.data]
      setOptions(catOptions);
      prodData.push(...resp.data);
    
      
      if (sortSelected) {
        if (sortSelected == "popularity") {
          prodData.sort((a, b) => b.rating.count - a.rating.count);
        }
        if (sortSelected == "rating") {
          prodData.sort((a, b) => b.rating.rate - a.rating.rate);
        }
        if (sortSelected == "lth") {
          prodData.sort((a, b) => a.price - b.price);
        }
        if (sortSelected == "htl") {
          prodData.sort((a, b) => b.price - a.price);
        }
      }
     console.log(prodData)
      setProdData(prodData);
      setIsLoading(false);
    };

    fetchData();
  }, [sortSelected,selectedOption,page]);
  const Container = styled.div`
 
    margin: 20px;
  `;
  console.log(isLoading);
  const AppContainer = styled.div`
    
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    width:100vw;
    margin-top: 100px;
    /* height: 100vh; */
    
   
  `;
  return (
    <AppContainer>
      
    
      {isLoading ? (
        <Spinner />
      ) : (
        <Container>
          <div className=" flex justify-start mb-2">
          <SortBox setSort={setSortSelected}  sort={sortSelected} />
          <CatagoryBox selectedOption={selectedOption} options={options} SetSelectedOption= {setSelectedOption}/>
          </div>
          <ProductContainer productData={prodData} page={page} setPage={setPage}  />
               </Container>
      )}
      
    </AppContainer>
  );
}

export default App;
