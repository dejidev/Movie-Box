// import React from 'react';
// import { BiSearch } from "react-icons/bi";
// import "./search.global.css";

// const Search = () => {
//     return (
//         <div className='w-1/2  '>
//             <div class="search_container ">
//                 <input type="search" placeholder="What do you want to watch ? " className='w-full placeholder:font-sm' />
//                 <button type="submit" className='pl-2 '><BiSearch className='font-bold text-lg' /></button>
//             </div>
//         </div>
//     )
// }

// export default Search


"use client";
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import "./search.global.css";

const Search = ({ onSearch, query, setQuery }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownItems = ['top_rated', 'popular'];

    const handleSearch = () => {
        onSearch(query);
        setShowDropdown(true);
        setTimeout(() => setShowDropdown(false), 3000);
    };

    const handleSelect = (item) => {
        setQuery(item);
        setShowDropdown(false);
    };

    return (
        <div className="w-1/2 relative">
            <div className="search_container">
                <input
                    type="search"
                    placeholder="What do you want to watch?"
                    className="w-full placeholder:font-sm"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setShowDropdown(true)}
                />
                <button type="submit" className="pl-2" onClick={handleSearch}>
                    <BiSearch className="font-bold text-lg" />
                </button>
            </div>
            {showDropdown && (
                <div className="dropdown">
                    {dropdownItems.map((item) => (
                        <div
                            key={item}
                            onClick={() => handleSelect(item)}
                            className="dropdown-item px-2 py-1 bg-opacity-50 shadow-md hover:bg-gray-200  hover:text-gray-900 cursor-pointer"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
