import React from 'react';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='py-36'>
                <h1 className='text-4xl font-bold uppercase text-center'>My Services</h1>
            </div>
        </div>
    );
};

export default Home;