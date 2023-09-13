import React from 'react';
import { BiSearch } from "react-icons/bi";
import "./search.global.css";

const Search = () => {
    return (
        <div className='w-1/2  '>
            <div class="search_container ">
                <input type="search" placeholder="What do you want to watch ? " className='w-full placeholder:font-sm' />
                <button type="submit" className='pl-2 '><BiSearch className='font-bold text-lg'/></button>
            </div>
        </div>
    )
}

export default Search
