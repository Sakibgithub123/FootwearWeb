import React from 'react';
import Banner from '../Banner/Banner';
import LatestProduct from '../../Products/LatestProduct/LatestProduct';
import TopSeller from '../../Products/TopSeller/TopSeller';
import BigSale from '../../Products/BigSale/BigSale';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestProduct></LatestProduct>
            <TopSeller></TopSeller>
            <BigSale></BigSale>
        </div>
    );
};

export default Home;