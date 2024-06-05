import React from 'react';
import { Card } from './card'; // Make sure the path is correct for your project

export const Feedback = () => {
    return (
        <div className='w-full py-32 bg-[#eee2df]'>
            <div className='md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0'>
                <div className='py-4'>
                    <h1 className='gap-2 py-3 text-6xl font-bold'>
                        Student <span className='text-fakatred'>Feedback</span>
                    </h1>
                    <p className='text-[#6D737A]'>These are the feedbacks of our valued customers at FAKAT </p>
                </div>
                <div className='flex space-x-4 overflow-x-auto'>
                    <div className='flex-shrink-0 w-1/2 px-2'>
                        <Card />
                    </div>
                    <div className='flex-shrink-0 w-1/2 px-2'>
                        <Card />
                    </div>
                    <div className='flex-shrink-0 w-1/2 px-2'>
                        <Card />
                    </div>
                    <div className='flex-shrink-0 w-1/2 px-2'>
                        <Card />
                    </div>
                    <div className='flex-shrink-0 w-1/2 px-2'>
                        <Card />
                    </div>
                    <div className='flex-shrink-0 w-1/2 px-2'>
                        <Card />
                    </div>
                    <div className='flex-shrink-0 w-1/2 px-2'>
                        <Card />
                    </div>
                    <div className='flex-shrink-0 w-1/2 px-2'>
                        <Card />
                    </div>
                    <div className='flex-shrink-0 w-1/2 px-2'>
                        <Card />
                    </div>
                    <div className='flex-shrink-0 w-1/2 px-2'>
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    );
}
// export default Feedback;
