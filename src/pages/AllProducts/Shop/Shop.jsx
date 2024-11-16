import React, { useEffect, useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import "../Shop/RangeSlider.css"
import ProductBar from '../ProductBar/ProductBar';
import { useLocation } from 'react-router-dom';
const Shop = () => {
    const [allCategory, setcategory] = useState([])
    const [allBrand, setBrand] = useState([])
    //filtering
    const [category, setSelectCategory] = useState('');
    const [brand, setSelectBrand] = useState('');
    const [color, setColor] = useState('');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [products, setProducts] = useState([]);
    // const { pathname } = useLocation()
    // console.log(pathname);
    // console.log(category);
    // console.log(products);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => {
                setcategory(data)
                // setLoading(false)

            })
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/brand')
            .then(res => res.json())
            .then(data => {
                setBrand(data)
                // setLoading(false)

            })
    }, [])
    //filter product
    useEffect(() => {
        fetch(`http://localhost:5000/productsFilter?category=${category}&brand=${brand}&color=${color}&minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}`, {
            params: {
                category,
                brand,
                color,
                minPrice: priceRange[0],
                maxPrice: priceRange[1]
            }

        })
            .then(res => res.json())
            .then(data => {
                if (!data || data.length === 0) {
                    console.log('No products found.');
                    setProducts([]); // Clear products if no result
                } else {
                    setProducts(data)
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [category, brand, color, priceRange])
    // useEffect(() => {

    //     fetch(`http://localhost:5000/productsFilter/${category}?brand=${brand}&color=${color}&minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             if (!data || data.length === 0) {
    //                 console.log('No products found.');
    //             } else {
    //                 setProducts(data)
    //             }
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //         });

    // }, [category, brand, color, priceRange])



    return (
        <div className='flex flex-col md:flex-row gap-3 my-5'>
            <div className='md:w-3/12'>
                <div className='w-full text-xs md:text-sm'>
                    <h3 className='bg-gray-500 p-5 w-full text-xs md:text-sm font-black'>Browse Categories</h3>
                    <div className='flex flex-col'>
                        <button  className={`border-b-2 border-gray-400 py-3 font-semibold ${category === '' ? 'bg-gray-400 text-white' : ''}`} onClick={() => setSelectCategory('')}>All</button>
                        {
                            allCategory.map((item, index) => <button key={index} className={`border-b-2 border-gray-400 py-3 font-semibold ${item.category === category ? 'bg-gray-400 text-white' : ''}`} onClick={() => setSelectCategory(item.category)}>{item.category}</button>)
                        }
                    </div>
                </div>
                <div className='w-full text-xs md:text-sm'>
                    <h3 className='bg-gray-500 p-5 w-full text-xs md:text-sm font-black'>Product Filters</h3>
                    <div className='my-2 text-xs md:text-sm'>
                        <h4 className='my-1  text-left font-black'>Brands</h4>
                        {/* <input type="radio" className="radio radio-warning" defaultChecked /> */}
                        {
                            allBrand.map((item, index) =>
                                <div key={index} className='py-2'>
                                    <div className='flex flex-row gap-5 '>
                                        <input type="radio" name="brand" value={item.brand} onChange={() => setSelectBrand(item.brand)} className="radio radio-warning" /><span className='font-semibold'>{item.brand}</span>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className='my-2 text-xs md:text-sm'>
                        <h4 className='my-1 text-xs md:text-sm text-left font-black'>Colors</h4>
                        {['White', 'Black', 'Green', 'Silver', 'Pink', 'Brown'].map((item, index) => (
                            <div key={index} className='py-2'>
                                <div className='flex flex-row gap-5'>
                                    <input type="radio" name="color" value={item} onChange={() => setColor(item)} />
                                    <span className='font-semibold'>{item}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='my-2'>
                        <h4 className='my-1 text-xs md:text-sm text-left font-black'>Price</h4>
                        <div style={{ width: '200px', margin: '1px 1px' }}>
                            <h3 className='py-2'>Price Range: ${priceRange[0]} - ${priceRange[1]}</h3>
                            <RangeSlider
                                className="range-slider"
                                min={0}
                                max={1000}
                                defaultValue={[0, 1000]}
                                onInput={(values) => setPriceRange(values)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:w-9/12'>
                <ProductBar products={products} noProducts="No products found"></ProductBar>
            </div>
        </div>
    );
};

export default Shop;