import React from 'react';

const SideBar = () => {
    return (
        <div>
            <div className='w-full'>
                <h3 className='bg-gray-500 p-5 w-full'>Browse Categories</h3>
                <p className='border-b-2 border-gray-400 py-3'>Men's Collection</p>
                <p className='border-b-2 border-gray-400 py-3'>Men's Collection</p>
                <p className='border-b-2 border-gray-400 py-3'>Men's Collection</p>
                <p className='border-b-2 border-gray-400 py-3'>Men's Collection</p>
                <p className='border-b-2 border-gray-400 py-3'>Men's Collection</p>
                <p className='border-b-2 border-gray-400 py-3'>Men's Collection</p>
            </div>
            <div className='w-full'>
                <h3 className='bg-gray-500 p-5 w-full'>Product Filters</h3>
                <div className='my-2'>
                <h4 className='my-1 text-xl'>Brands</h4>
                <input type="radio" name="radio-6" value={"Apple"} className="radio radio-warning" defaultChecked />
                <input type="radio" name="radio-6"  defaultValue={"Apple"}  className="radio radio-warning" />
                <input type="radio" name="radio-6"  defaultValue={"Apple"}  className="radio radio-warning" />
                <input type="radio" name="radio-6"  defaultValue={"Apple"}  className="radio radio-warning" />
                <input type="radio" name="radio-6"  defaultValue={"Apple"}  className="radio radio-warning" />
                <input type="radio" name="radio-6"  defaultValue={"Apple"}  className="radio radio-warning" />
                </div>
                <div className='my-2'>
                <h4 className='my-1 text-xl'>Colors</h4>
                <input type="radio" name="radio-7" defaultValue={"Red"} className="radio radio-warning" defaultChecked />
                <input type="radio" name="radio-7"  defaultValue={"Red"}  className="radio radio-warning" />
                <input type="radio" name="radio-7"  defaultValue={"Red"}  className="radio radio-warning" />
                </div>
            </div>
            
        </div>
    );
};

export default SideBar;