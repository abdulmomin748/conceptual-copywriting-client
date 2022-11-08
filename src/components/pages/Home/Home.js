import React from 'react';
import Banner from './Banner';
import LetsTalk from './LetsTalk';
import Package from './Package';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='py-36 services-section'>
                <h1 className='text-4xl font-bold uppercase text-center'>My Services</h1>
            </div>
            <div className='package-section'>
                <Package />
            </div>
            <div className='lets-talk-section'>
                <LetsTalk />
            </div>
        </div>
    );
};

export default Home;