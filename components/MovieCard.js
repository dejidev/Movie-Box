"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Imdb from "../assets/imdb.png";
import tom from "../assets/tom.png";
import { MdFavorite } from "react-icons/md";


const MovieCard = ({ movie }) => {
    const convertToUTC = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString(); // Convert to UTC format (e.g., "2023-09-07T12:34:56.789Z")
    };

    const releaseDateUTC = convertToUTC(movie.release_date);
    const movie_release_date = new Date(movie.release_date).getFullYear();
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };
    // console.log(movie);
    const genres = {
        28: 'Action',
        12: 'Adventure',
        16: 'Animation',
        35: 'Comedy',
        80: 'Crime',
        99: 'Documentary',
        18: 'Drama',
        10751: 'Family',
        14: 'Fantasy',
        36: 'History',
        27: 'Horror',
        10402: 'Music',
        9648: 'Mystery',
        10749: 'Romance',
        878: 'Science Fiction',
        10770: 'TV Movie',
        53: 'Thriller',
        10752: 'War',
        37: 'Western',
    };
    const translateGenreIdsToWords = (genreIds) => {
        return genreIds.map((genreId) => genres[genreId]).join(', ');
    };

    const getFirstGenreName = (genreIds) => {
        const firstGenreId = genreIds[0];
        return genres[firstGenreId] || 'Unknown';
    };

    // Now you can use the getFirstGenreName function to get the first genre name
    const firstGenreName = getFirstGenreName(movie.genre_ids);


    return (
        <div data-testid="movie-card" className='mb-6 md:px-8 px-3 ' >

            <div className='relative w-auto' >
                <Image data-testid='movie-poster' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='poster' width="500" height="500" className='w-full' />
                <div className='absolute top-5  text-xs md:text-sm text-white flex items-center justify-between px-2 w-full' >
                    <p className='bg-gray-100 p-1 border-lg text-gray-900 border rounded-lg'>{firstGenreName}</p>
                    <div
                        className={`bg-gray-100 p-[2px] border rounded-full cursor-pointer ${liked ? 'text-red-700' : 'text-gray-500 hover:p-1'
                            }`}
                        onClick={toggleLike}
                    >
                        <MdFavorite className='text-2xl' />
                    </div>
                </div>
            </div>

            <Link href={`/movie/${movie.id}`}>

                <p data-testid='movie-release-date' className='text-[12px] text-gray-400' >{movie_release_date}</p>
                <h2 data-testid='movie-title' className='text-[18px] font-semibold' >{movie.title}</h2>
                <div className='text-[12px] flex items-center justify-between'>
                    <div className='flex items-center'>
                        <Image src={Imdb} alt='Imdb' width={30} />
                        <p className='pl-1'>{movie.vote_average * 10}/100</p>
                    </div>
                    <div className='flex items-center'>
                        <Image src={tom} alt='tomatoe' />
                        <p className='pl-1'>{movie.vote_count}</p>
                    </div>
                </div>

                <p className='text-[12px] text-gray-400'>
                    {translateGenreIdsToWords(movie.genre_ids)}
                </p>

            </Link>
        </div>
    )
}

export default MovieCard
