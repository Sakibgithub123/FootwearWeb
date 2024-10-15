import React from 'react';
import Banner from '../Banner/Banner';
import LatestProduct from '../../Products/LatestProduct/LatestProduct';
import TopSeller from '../../Products/TopSeller/TopSeller';
import BigSale from '../../Products/BigSale/BigSale';
import ProductDetails from '../../Products/ProductDetails/ProductDetails';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestProduct></LatestProduct>
            <TopSeller></TopSeller>
            <BigSale></BigSale>
            <ProductDetails></ProductDetails>
        </div>
    );
};

export default Home;