import React from 'react';
import Banner from '../Banner/Banner';
import LatestProduct from '../../Products/LatestProduct/LatestProduct';
import TopSeller from '../../Products/TopSeller/TopSeller';
import BigSale from '../../Products/BigSale/BigSale';
import ProductDetails from '../../Products/ProductDetails/ProductDetails';
import ProductBar from '../../AllProducts/ProductBar/ProductBar';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestProduct></LatestProduct>
            <TopSeller></TopSeller>
            <BigSale></BigSale>
            {/* <ProductDetails></ProductDetails> */}
            {/* <ProductBar></ProductBar> */}
        </div>
    );
};

export default Home;