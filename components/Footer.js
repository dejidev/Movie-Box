import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='text-black'>
            <div className='flex items-center justify-center text[#111827] text-2xl gap-4 mt-16'>
                <button>
                    <FaFacebookSquare />
                </button>
                <button><BsInstagram /></button>
                <button> <BsTwitter /></button>
                <button><BsYoutube /></button>

            </div>
            <div className='flex flex-col items-center justify-center text-[#111827] font-semibold text-[18px] gap-4 mt-6 md:flex-row'>
                <p>Conditions of Use</p>
                <p>Privacy & Policy</p>
                <p>Press Room</p>
            </div>

            <p className='flex items-center justify-center text-gray-500 text-[18px] my-6'>© 2021 MovieBox by Adriana Eka Prayudha  </p>
        </div>
    )
}

export default Footer;
