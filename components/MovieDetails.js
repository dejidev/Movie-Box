"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import TV from "../assets/tv.png";
import Menu from "../assets/Menu.png";
import Home from "../assets/Home.png";
import Movie from "../assets/Movie_Projector.png";
import Show from "../assets/TV_show.png";
import calendar from "../assets/calendar.png";
import logOut from "../assets/Logout.png";
import bigPlay from "../assets/bigPlay.png";
import star from "../assets/Star.png";
import twoTicket from "../assets/Tickets.png";
import list from "../assets/list.png";
import gp from "../assets/gp.png";
import Link from 'next/Link';

import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    variable: '--font-Poppins',
    display: 'swap',
})

import { DM_Sans } from 'next/font/google'

const dm_sans = DM_Sans({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-DM-Sans',
    display: 'swap',
})

const MovieDetails = ({ movie }) => {
    const [activeItem, setActiveItem] = useState("Movie");
    const [asideVisible, setAsideVisible] = useState(false);

    // Function to handle sidebar item click
    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };
    const toggleAside = () => {
        setAsideVisible(!asideVisible);
    };



    console.log(movie.genre_ids);
    console.log(movie);
    // Render the movie details here
    return (
        <div className={poppins.className}>
            <div className='flex relative mb-'>

                <div className='flex items-center md:hidden absolute left-5 top-5 ml-3'>
                    <Image src={TV} alt="TV logo" />
                    <p className='pl-2 font-semibold  md:pl-4 lg:font-bold md:text-2xl text-center'>Movie Box</p>
                </div>
                <div className='flex items-center md:hidden absolute right-5 top-5'>
                    <Image src={Menu} alt="Menu" onClick={toggleAside} />
                </div>


                {/* Sidebar */}
                {/* Large screen */}
                <aside className={`w-0 md:w-1/4 h-screen py-4 bg-gray-200 border rounded-r-3xl `}>
                    <div className="mb-4 flex items-center justify-center ">
                        <Image src={TV} alt="TV logo"
                        // width={30} height={30}
                        />
                        <div className={dm_sans.className} >
                            <p className={`pl-2 font-semibold md:pl-4 lg:font-bold md:text-2xl ${!asideVisible && 'hidden md:block'}`}>
                                Movie Box
                            </p>
                        </div>

                    </div>
                    {/* Sidebar content */}
                    <ul className="flex flex-col flex-1 overflow-y-auto">
                        <li
                        >
                            <Link href="/" className={`mb-2 flex justify-start items-center gap-3 pl-8 md:pl-12 lg:md:pl-16 py-4 ${activeItem === 'Home' ? 'bg-[#DECDD1] text-[#BE123C] border-r-4 border-[#BE123C]' : ''
                                }`}
                                onClick={() => handleItemClick('Home')}>
                                <Image src={Home} alt="home" />
                                <p className={` text-[20px] font-semibold ${activeItem === 'Home' ? 'text-[#BE123C]' : 'text-[#666666]'
                                    }`}>Home</p>
                            </Link>

                        </li>
                        <li
                            className={`mb-2 flex justify-start items-center gap-3 pl-8 md:pl-12 lg:md:pl-16 py-4 ${activeItem === 'Movie' ? 'bg-[#DECDD1] text-[#BE123C] border-r-4 border-[#BE123C]' : ''
                                }`}
                            onClick={() => handleItemClick('Movie')}
                        >
                            <Image src={Movie} alt="movie" />
                            <p className={`text-[20px] font-semibold ${activeItem === 'Movie' ? 'text-[#BE123C]' : 'text-[#666666]'
                                }`}>Movie</p>
                        </li>
                        <li
                            className={`mb-2 flex justify-start items-center gap-3 pl-8 md:pl-12 lg:md:pl-16 py-4 ${activeItem === 'Show' ? 'bg-[#DECDD1] text-[#BE123C] border-r-4 border-[#BE123C]' : ''
                                }`}
                            onClick={() => handleItemClick('Show')}
                        >
                            <Image src={Show} alt="show" />
                            <p className={`text-[20px] font-semibold ${activeItem === 'Show' ? 'text-[#BE123C]' : 'text-[#666666]'
                                }`}>Show</p>
                        </li>
                        <li
                            className={`mb-2 flex justify-start items-center gap-3 pl-8 md:pl-12 lg:md:pl-16 py-4 ${activeItem === 'Upcomings' ? 'bg-[#DECDD1] text-[#BE123C] border-r-4 border-[#BE123C]' : ''
                                }`}
                            onClick={() => handleItemClick('Upcomings')}
                        >
                            <Image src={calendar} alt="calendar" />
                            <p className={`text-[20px] font-semibold ${activeItem === 'Upcomings' ? 'text-[#BE123C]' : 'text-[#666666]'
                                }`}>Upcomings</p>
                        </li>
                        {/* Add more sidebar links as needed */}
                        <div className="bg-[#FCF5F7] border border-[#D15876] rounded-lg mx-4 md:mx-8  p-4">
                            <p className="text-[15px] font-semibold text-[#333333] my-4 ">
                                Play movie quizzes and earn free tickets
                            </p>
                            <p className="text-[12px] text-[#666666] font-medium">50k people are playing now</p>
                            <div className="flex justify-center items-center">
                                <button className="text-[#BE123C] bg-[#F0C8D2] text-[12px] font-medium px-2 py-1 my-2 rounded-full">
                                    Start playing
                                </button>
                            </div>
                        </div>
                        <li
                            className={`my-2 flex justify-start items-center gap-3 pl-8 md:pl-12 lg:md:pl-16 py-4 ${activeItem === 'Log Out' ? 'bg-[#DECDD1] text-[#BE123C] border-r-4 border-[#BE123C]' : ''
                                }`}
                            onClick={() => handleItemClick('Log Out')}
                        >
                            <Image src={logOut} alt="logout" />
                            <p className={`text-[20px] font-semibold ${activeItem === 'Log Out' ? 'text-[#BE123C]' : 'text-[#666666]'
                                }`}>Log Out</p>
                        </li>
                    </ul>
                </aside>



                {/* Small screen */}
                <aside className={`w-1/2 md:hidden h-full py-4 bg-gray-200 border rounded-r-3xl  absolute z-10 ${asideVisible ? 'translate-x-0 transition-transform ease-in duration-300' : '-translate-x-full transition-transform ease-out duration-300'}`}>
                    <div className="mb-4 flex items-center justify-center ">
                        <Image src={TV} alt="TV logo"
                        // width={30} height={30}
                        />
                        <div className={dm_sans.className} >
                            <p className="pl-2 font-semibold md:pl-4 lg:font-bold md:text-2xl ">
                                Movie Box
                            </p>
                        </div>

                    </div>
                    {/* Sidebar content */}
                    <ul className="flex flex-col flex-1 overflow-y-auto">
                        <li>
                            <Link href="/" className={`mb-2 flex justify-start items-center gap-3 pl-8 md:pl-12 lg:md:pl-16 py-4 ${activeItem === 'Home' ? 'bg-[#DECDD1] text-[#BE123C] border-r-4 border-[#BE123C]' : ''
                                }`}
                                onClick={() => handleItemClick('Home')}>
                                <Image src={Home} alt="home" />
                                <p className={` text-[15px] font-semibold ${activeItem === 'Home' ? 'text-[#BE123C]' : 'text-[#666666]'
                                    }`}>Home</p>
                            </Link>

                        </li>
                        <li
                            className={`mb-2 flex justify-start items-center gap-3 pl-8 md:pl-12 lg:md:pl-16 py-4 ${activeItem === 'Movie' ? 'bg-[#DECDD1] text-[#BE123C] border-r-4 border-[#BE123C]' : ''
                                }`}
                            onClick={() => handleItemClick('Movie')}
                        >
                            <Image src={Movie} alt="movie" />
                            <p className={`text-[15px] font-semibold ${activeItem === 'Movie' ? 'text-[#BE123C]' : 'text-[#666666]'
                                }`}>Movie</p>
                        </li>
                        <li
                            className={`mb-2 flex justify-start items-center gap-3 pl-8 md:pl-12 lg:md:pl-16 py-4 ${activeItem === 'Show' ? 'bg-[#DECDD1] text-[#BE123C] border-r-4 border-[#BE123C]' : ''
                                }`}
                            onClick={() => handleItemClick('Show')}
                        >
                            <Image src={Show} alt="show" />
                            <p className={`text-[15px] font-semibold ${activeItem === 'Show' ? 'text-[#BE123C]' : 'text-[#666666]'
                                }`}>Show</p>
                        </li>
                        <li
                            className={`mb-2 flex justify-start items-center gap-3 pl-8 md:pl-12 lg:md:pl-16 py-4 ${activeItem === 'Upcomings' ? 'bg-[#DECDD1] text-[#BE123C] border-r-4 border-[#BE123C]' : ''
                                }`}
                            onClick={() => handleItemClick('Upcomings')}
                        >
                            <Image src={calendar} alt="calendar" />
                            <p className={`text-[15px] font-semibold ${activeItem === 'Upcomings' ? 'text-[#BE123C]' : 'text-[#666666]'
                                }`}>Upcomings</p>
                        </li>
                        {/* Add more sidebar links as needed */}
                        <div className="bg-[#FCF5F7] border border-[#D15876] rounded-lg mx-4 md:mx-8  p-4">
                            <p className="text-[15px] font-semibold text-[#333333] my-4 ">
                                Play movie quizzes and earn free tickets
                            </p>
                            <p className="text-[12px] text-[#666666] font-medium">50k people are playing now</p>
                            <div className="flex justify-center items-center">
                                <button className="text-[#BE123C] bg-[#F0C8D2] text-[12px] font-medium px-2 py-1 my-2 rounded-full">
                                    Start playing
                                </button>
                            </div>
                        </div>
                        <li
                            className={`my-2 flex justify-start items-center gap-3 pl-8 md:pl-12 lg:md:pl-16 py-4 ${activeItem === 'Log Out' ? 'bg-[#DECDD1] text-[#BE123C] border-r-4 border-[#BE123C]' : ''
                                }`}
                            onClick={() => handleItemClick('Log Out')}
                        >
                            <Image src={logOut} alt="logout" />
                            <p className={`text-[15px] font-semibold ${activeItem === 'Log Out' ? 'text-[#BE123C]' : 'text-[#666666]'
                                }`}>Log Out</p>
                        </li>
                    </ul>
                </aside>

                <section className='w-full md:w-3/4 mx-3 md:mx-6 lg:mx-8 mt-20 md:mt-8'>
                    <div className="relative mt-3 md:mt-0 " data-testid="movie-poster">
                        <Image
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            sizes="100vw"
                            width={500}
                            height={500}
                            className="rounded-lg"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            alt='back' />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
                            <div className="bg-gray-300 bg-opacity-50 shadow-md rounded-full p-2 md:p-4 ">
                                <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
                                    <Image src={bigPlay} alt='play' />
                                </a>
                            </div>
                            <p className="text-center text-[#E8E8E8] text-[18px] ">Watch Trailer</p>

                        </div>
                    </div>


                    <section className='mt-4 md:flex md:gap-6 w-full'>
                        <div className='md:w-2/3'>
                            <div className='lg:flex items-center justify-between'>
                                <p className='gap-2 font-medium text-base md:text-[20px] '>
                                    <span data-testid="movie-title" className='px-1'>{movie.original_title}</span>•
                                    <span data-testid="movie-release-date" className='px-1'>{movie.release_date}</span>•
                                    {/* <span className='px-1'>{movie.vote_count}</span>• */}
                                    <span data-testid="movie-overview" className='px-1'>{movie.runtime}m</span>
                                </p>

                                <div>
                                    {movie.genres.map((genre) => (
                                        <button
                                            key={genre.id}
                                            className="text-[#B91C1C] border-2 border-[#F8E7EB] text-sm font-medium px-2 py-1 my-2 rounded-full"
                                        >
                                            {genre.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <p className='md:my-4 mb-4 text-sm' data-testid="movie-overview">{movie.overview}
                            </p>

                            <div className='gap-2 font-medium'>
                                <p><span>Production_companies : </span><span className='text-[#BE123C]'> {movie.production_companies[0].name}</span></p>
                                <p><span>Production_countries : </span><span className='text-[#BE123C]'> {movie.production_countries[0].name}</span></p>
                                <p><span>Status :</span><span className='text-[#BE123C]'> {movie.status}</span></p>
                            </div>
                            <div className=' items-center md:border md:inline-flex md:mt-4'>
                                <p className='bg-[#BE123C] text-white px-4 py-2 rounded-md inline-block my-1'>Top rated movie #65</p>
                                <p className='px-2 my-1'>Awards: 9 nominations</p>
                            </div>
                        </div>

                        <div className='md:w-1/3'>
                            <div className='flex md:justify-end items-center py-2'>
                                <Image src={star} alt='star' />
                                <p className='pl-2'>{movie.vote_average * 10} | 100</p>
                            </div>
                            <div className='bg-[#BE123C] text-white inline-flex md:flex md:justify-center items-center md:w-full px-4 py-2 rounded-md gap-4'>
                                <Image src={twoTicket} alt='ticket' />
                                <p >See Showtimes</p>
                            </div>
                            <div className='bg-[#FCF5F7] border-[#D15876] text-black inline-flex mt-3 md:flex md:justify-center items-center md:w-full px-4 py-2 rounded-md gap-4'>
                                <Image src={list} alt='list' />
                                <p>More watch options</p>
                            </div>
                            <div className='md:w-full my-4'>
                                <Image src={gp} alt='gp' />
                            </div>
                        </div>

                    </section>


                </section>


            </div>



        </div>
    );
};

export default MovieDetails;
