import './App.css';
import { useState, useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfigurations,getGenres } from './store/homeSlice';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "./components/Header/header.js";
import Footer from "./components/Footer/footer.js";
import Home from "./pages/home/home"
import SearchResult from "./pages/searchResults/searchResults"
import Explore from "./pages/explore/explore"
import Details from "./pages/details/details"
import PageNotFound from "./pages/404/PageNotFound"

function App() {
  const dispatch = useDispatch()
  const {url} = useSelector((state) => state.home)

  useEffect(() => {
    fetchApiConfig()
  },[])

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      
      const url = {
        backdrop : res.images.secure_base_url + "original",
        poster : res.images.secure_base_url + "original",
        profile : res.images.secure_base_url + "original"
      }
      dispatch(getApiConfigurations(url))
    });
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/search/:query' element={<SearchResult />}/>
        <Route path='/explore/:mediaType' element={<Explore />}/>
        <Route path='/:mediaType/:id' element={<Details />}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
