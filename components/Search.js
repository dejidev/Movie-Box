"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';
import "./search.global.css";
import SearchModal from './SearchModal';

const Search = ({ query, setQuery, searchResults, loading, error }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSearch = () => {
        // onSearch(query);
    };

    console.log(query);

    return (
        <div className="w-1/2 ">
            <div className="search_container">
                <input
                    type="search"
                    placeholder="What do you want to watch?"
                    className="w-full placeholder:font-sm"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="pl-2" onClick={handleSearch}>
                    <BiSearch className="font-bold text-lg" />
                </button>
            </div>


            <div className="absolute full z-20">
                {error &&
                    <p className='text-red-500'>{error}</p>
                }
                {loading && query && (<div className="text-gray-100">Loading...</div>)}
                {searchResults.length === 0 && query.length > 1 && (
                    <div className='bg-gray-100 text-gray-900 shadow-md px-2 md:px-4 py-2 rounded-md'>
                        Movie not found
                    </div>
                )}

                {searchResults && searchResults.length > 0 && (
                    <div className='bg-gray-100 text-gray-900 shadow-md px-2 md:px-4 py-2 rounded-md'>
                        <SearchModal searchResults={searchResults} onClose={() => setIsModalOpen(false)} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
