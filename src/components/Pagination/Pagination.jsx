import React from 'react';

const Pagination = ({pageNumber,totalPages,setPageNumber}) => {
    const updatePageNumber = (num) => {
        if (num >= 0 && num < totalPages) {
            setPageNumber(num);
        }

    };
    return (
        // {/* Pagination controls */}
        <div className="mx-auto mt-5 flex md:w-fit select-none items-center justify-center divide-x divide-zinc-500 overflow-hidden rounded-sm border border-zinc-500 bg-white dark:bg-gray-700">
            {/* Previous button */}
            <button
                disabled={pageNumber === 0}
                onClick={() => updatePageNumber(pageNumber - 1)}
                className="w-10 md:w-20 cursor-pointer px-2 py-1 md:px-3 md:py-2 text-center text-[10px] md:text-sm outline-none transition-all duration-200 hover:bg-gray-500/20 disabled:bg-zinc-500 disabled:text-white"
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
                                className={`cursor-pointer md:px-4 px-2 py-1   text-[10px] md:text-sm transition-all duration-200 ${pageNumber === page ? 'bg-zinc-500 text-white' : 'hover:bg-gray-500/20'
                                    } md:py-[8px] font-semibold`}
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
                className="w-10 md:w-20 cursor-pointer px-2 py-1 md:px-3 md:py-2 text-center text-[10px] md:text-sm outline-none transition-all duration-200 hover:bg-gray-500/20 disabled:bg-zinc-500 disabled:text-white"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;