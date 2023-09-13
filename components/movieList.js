"use client"

import React, { useEffect, useState } from 'react';
import tmdbApi from '../lib/tmdb';
import { BsChevronRight } from "react-icons/bs"
import MovieCard from './MovieCard';
import { RotatingLines } from 'react-loader-spinner';

const MovieList = ({query}) => {
    const [movies, setMovies] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const initialCardCount = 10;
    // console.log(query);
    useEffect(() => {
        // Define an async function to fetch popular movies
        const fetchPopularMovies = async () => {
            try {
                const response = await tmdbApi.get(`/movie/${query}`);
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        // Call the fetchPopularMovies function
        fetchPopularMovies();

    }, [query]);

    if (movies.length === 0) {
        return <div className='flex justify-center items-center h-[50vh]'>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
            </div>;
    }

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    console.log(movies);

    return (
        <div className='text-black'>
            <div className='flex items-center justify-between md:m-8 mt-8'>
                <h2 className='font-bold  text-2xl md:text-5xl py-4 '>Featured Movies</h2>

                <div
                    className={`flex items-center text-[#BE123C] mr-2 md:mr-4 cursor-pointer ${showMore ? 'hover:text-[#BE123C]' : ''
                        }`}
                    onClick={toggleShowMore}
                >
                    <p>{showMore ? 'See less' : 'See more'}</p>
                    <BsChevronRight />
                </div>
            </div>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}></li>
                ))}
            </ul>


            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 lg:gap-8'>
                {movies.slice(0, showMore ? movies.length : initialCardCount).map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

        </div >
    );
};

export default MovieList;
