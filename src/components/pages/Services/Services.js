import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesItem from './ServicesItem';

const Services = () => {
    const services = useLoaderData();
    return (
        <div className='max-w-7xl mx-auto py-20 pt-32'>
            <h1 className='text-4xl text-center font-bold uppercase  mb-20'>My Services</h1>
            <div className='grid grid-cols-3 gap-x-5 gap-y-16 text-left'>
                {
                    services.map(serviceItem => <ServicesItem key={serviceItem._id} serviceItem={serviceItem}  />)
                }
            </div>
        </div>
        
    );
};

export default Services;