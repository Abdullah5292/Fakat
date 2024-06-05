import React from 'react';
import Footer from '../components/footer';
import { NavBar } from '../components/landingnavbar';
import Heading from '../components/heading';
const AboutUs = () => {
    return (

        <div>
            <NavBar />
            <Heading />
            <div className="items-center justify-center px-6 mx-auto ">
                <h1 className="items-center justify-center text-3xl font-bold">About Us</h1>
                <p className="items-center justify-center text-lg ">
                    Welcome to Fakat Locker! We are a leading provider of secure locker solutions for individuals and businesses.
                </p>
                <p className="items-center justify-center mb-4 text-lg">
                    Our mission is to revolutionize the locker industry by offering innovative and customizable locker solutions that meet the diverse needs of our customers.
                </p>
                <p className="items-center justify-center mb-4 text-lg">
                    At Fakat Locker, we are committed to quality, reliability, and exceptional customer service. Whether you need lockers for personal use, schools, gyms, or corporate offices, we have the perfect solution for you.
                </p>
                <p className="items-center justify-center mb-4 text-lg">
                    Contact us at <a href="mailto:info@fakatlocker.com">info@fakatlocker.com</a> or call us at +123456789 for more information.
                </p>

            </div>
            <div className='mb-20'>

            </div>
            <Footer />
        </div>

    );
}

export default AboutUs;
