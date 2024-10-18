import React, { useEffect, useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
// import "../SideBar/RangeSlider.css"
const SideBar = () => {
    const [category, setcategory] = useState([])
    const [brand, setBrand] = useState([])
    //filtering
    const [selectCategory, setSelectCategory] = useState('');
    const [selectBrand, setSelectBrand] = useState('');
    const [color, setColor] = useState('');
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [products, setProducts] = useState([]);

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
        fetch('http://localhost:5000/productsFilter', {
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
                setProducts(data)
                // setLoading(false)

            })
    }, [category, brand, color, priceRange])
    //price range
    

    // const handlePriceChange = (values) => {
    //     setPriceRange(values);
    // };

    return (
        <div>
            <div className='w-full'>
                <h3 className='bg-gray-500 p-5 w-full'>Browse Categories</h3>
                {
                    category.map((item, index )=> <p key={index} className='border-b-2 border-gray-400 py-3' onClick={() => setSelectCategory(item.category)}>{item.category}</p>)
                }

                {/* <p className='border-b-2 border-gray-400 py-3'>Men's Collection</p>
                <p className='border-b-2 border-gray-400 py-3'>Men's Collection</p>
                <p className='border-b-2 border-gray-400 py-3'>Men's Collection</p>
                <p className='border-b-2 border-gray-400 py-3'>Men's Collection</p>
                <p className='border-b-2 border-gray-400 py-3'>Men's Collection</p> */}
            </div>
            <div className='w-full'>
                <h3 className='bg-gray-500 p-5 w-full'>Product Filters</h3>
                <div className='my-2'>
                    <h4 className='my-1 text-xl text-left'>Brands</h4>
                    <input type="radio" className="radio radio-warning" defaultChecked />
                    {
                        brand.map((item, index )=>
                            <div key={index} className='py-2'>
                                <div className='flex flex-row gap-5 '>
                                    <input type="radio" name="brand" value={item.brand} onChange={() => setSelectBrand(item.brand)} className="radio radio-warning" /><span>{item.brand}</span>
                                </div>
                            </div>
                        )
                    }


                </div>
                {/* <div className='my-2'>
                    <h4 className='my-1 text-xl text-left'>Colors</h4>
                    <div className='py-2'>
                        <div className='flex flex-row gap-5 '>
                            <input type="radio" name="radio-7" defaultValue={"Red"} className="radio radio-warning" defaultChecked /><span>White</span>
                        </div>
                        <div className='flex flex-row gap-5 '>
                            <input type="radio" name="radio-7" defaultValue={"Red"} className="radio radio-warning" /><span>Black</span>
                        </div>
                        <div className='flex flex-row gap-5 '>
                            <input type="radio" name="radio-7" defaultValue={"Red"} className="radio radio-warning" /><span>Green</span>
                        </div>
                        <div className='flex flex-row gap-5 '>
                            <input type="radio" name="radio-7" defaultValue={"Red"} className="radio radio-warning" /><span>Silver</span>
                        </div>
                        <div className='flex flex-row gap-5 '>
                            <input type="radio" name="radio-7" defaultValue={"Red"} className="radio radio-warning" /><span>Pink</span>
                        </div>
                        <div className='flex flex-row gap-5 '>
                            <input type="radio" name="radio-7" defaultValue={"Red"} className="radio radio-warning" /><span>Brown</span>
                        </div>
                    </div>
                </div> */}
                <div className='my-2'>
                    <h4 className='my-1 text-xl text-left'>Colors</h4>
                    {['White', 'Black', 'Green', 'Silver', 'Pink', 'Brown'].map((item, index) => (
                        <div key={index} className='py-2'>
                            <div className='flex flex-row gap-5'>
                                <input type="radio" name="color" value={item} onChange={() => setSelectColor(item)} />
                                <span>{item}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='my-2'>
                    <h4 className='my-1 text-xl text-left'>Price</h4>
                    <div style={{ width: '300px', margin: '20px auto' }}>
                        <h3>Price Range: ${priceRange[0]} - ${priceRange[1]}</h3>
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
    );
};

export default SideBar;