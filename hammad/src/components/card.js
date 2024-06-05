/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Heroimg from '../media/heroImg.png'
import { StarRating } from "./starrating";
import yellowstar from '../media/star-2768.svg'
import avatar from '../media/avatar.jpg'
import quotationMark from '../media/quotationMark.png'

export const Card = () => {

    return (
        <div className='flex flex-col p-8 mx-2 my-8 bg-white shadow-2xl rounded-3xl'>
            <div className='flex items-center mb-8'>
                <img src={avatar} className='object-cover w-32 h-32 mr-8 rounded-full' alt="Avatar" />
                <div className='flex flex-col'>
                    <h1 className='text-xl font-bold'>Jenny Wilson</h1>
                    <p className='text-gray-600'>UI-UX Designer</p>
                </div>
                <div className='ml-auto'>
                    <img className='h-25' src={quotationMark} alt="Quotation Mark" />
                </div>
            </div>
            <div className='py-8'>
                <h3 className='text-lg'>
                    Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis. Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.
                </h3>
            </div>
        </div>
    );
}

