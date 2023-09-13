"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import MovieList from '@/components/movieList';
import Search from '@/components/Search';
import TV from "../assets/tv.png";
import Menu from "../assets/menu.png";
import Poster from "../assets/Poster.png";
import Rating from "../assets/Rating.png";
import play from "../assets/Play.png";
import Footer from '@/components/Footer';



const Home = () => {
  const [query, setQuery] = useState('popular');

  return (
    <div className='relative w-full text-white'>
      <div className='absolute w-full -z-10 '>
        <Image
          className='h-screen'
          alt="poster"
          src={Poster}
          quality={100}
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>

      <header className='flex items-center justify-between px-3 md:px-16 pt-4'>
        <div className='flex items-center '>
          <Image src={TV} alt="TV logo" />
          <p className='pl-2 font-semibold md:pl-4 lg:font-bold md:text-2xl text-center'>Movie Box</p>
        </div>
        <div className='md:flex hidden items-center justify-center space-x-4 md:w-1/2 lg:w-2/3'>
          <Search className="w-full" query={query} setQuery={setQuery} />
        </div>
        <div className='flex items-center justify-end space-x-4'>
          <p className='mr-1 md:mr-4 text-xs lg:text-base'>Sign in</p>
          <Image src={Menu} alt="Menu" />
        </div>
      </header>


      <div className='w-full md:hidden flex justify-center mt-4'>
        <Search className="w-full" query={query} setQuery={setQuery} />
      </div>

      <section className=' w-5/6 md:w-1/2 lg:w-1/3 flex h-[80vh] md:h-[90vh] justify-center items-center  px-3 md:px-16' >
        <div>
          <h1 className='font-bold  text-5xl md:text-5xl py-4'>John Wick 3 : Parabellum</h1>
          <Image src={Rating} alt="Menu" />
          <p className='py-4'>John Wick is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
          <div className='bg-[#BE123C] flex items-center py-4 px-4 uppercase ' style={{ width: 'fit-content' }} >
            <Image src={play} alt='play' />
            <p className='px-2'>Watch trailer</p>
          </div>
        </div>

      </section>



      <div className="px-3 md:px-8" >
        <MovieList query={query} />
      </div>

      <div>
        <Footer />
      </div>



    </div>
  );
};

export default Home;
