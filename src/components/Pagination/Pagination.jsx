import React from 'react';
import { useForm } from 'react-hook-form';

const Pagination = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [products, refetch] = useAllProducts();

    // Pagination state
    const [pageNumber, setPageNumber] = useState(0);
    const itemsPerPage = 6; // Adjust this to show the number of items per page
    const totalPages = Math.ceil(products.length / itemsPerPage);

    // Get the products for the current page
    const paginatedProducts = products.slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage);

    // Function to update the current page number
    const updatePageNumber = (newPageNumber) => {
        if (newPageNumber >= 0 && newPageNumber < totalPages) {
            setPageNumber(newPageNumber);
        }
    };

    return (
        <div>
            {/* Products display section */}
            <div>
                {paginatedProducts.map((product, index) => (
                    <div key={index}>
                        {/* Render product details here */}
                        {product.name}
                    </div>
                ))}
            </div>

            {/* Pagination controls */}
            <div className="mx-auto mt-5 flex w-fit select-none items-center justify-center divide-x divide-zinc-500 overflow-hidden rounded-sm border border-zinc-500 bg-white dark:bg-gray-700">
                {/* Previous button */}
                <button
                    disabled={pageNumber === 0}
                    onClick={() => updatePageNumber(pageNumber - 1)}
                    className="w-20 cursor-pointer px-3 py-2 text-center text-sm outline-none transition-all duration-200 hover:bg-gray-500/20 disabled:bg-zinc-500 disabled:text-white"
                >
                    Previous
                </button>

                {/* Page number buttons */}
                <div className="flex items-center justify-center divide-x divide-zinc-500">
                    {Array.from({ length: 6 }).map((_, index) => {
                        const page = pageNumber + index;
                        if (page < totalPages) {
                            return (
                                <div
                                    key={page}
                                    onClick={() => updatePageNumber(page)}
                                    className={`cursor-pointer px-4 text-sm transition-all duration-200 ${pageNumber === page ? 'bg-zinc-500 text-white' : 'hover:bg-gray-500/20'
                                        } py-[8px] font-semibold`}
                                >
                                    {page + 1}
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>

                {/* Next button */}
                <button
                    disabled={pageNumber === totalPages - 1}
                    onClick={() => updatePageNumber(pageNumber + 1)}
                    className="w-20 cursor-pointer px-3 py-2 text-center text-sm outline-none transition-all duration-200 hover:bg-gray-500/20 disabled:bg-zinc-500 disabled:text-white"
                >
                    Next
                </button>
            </div>
        </div>
    );

};

export default Pagination;
