import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {description, img, price, serviceName, _id} = useLoaderData();
    return (
        <div className='pt-24 max-w-7xl mx-auto'>
            <h1 className='text-4xl text-center font-bold uppercase  mb-16'>Service Details</h1>
            <div className='service-details border rounded p-5'>
                <h2 className='text-2xl font-bold'><span className='border-b-2'>Service:</span> {serviceName}</h2>
                <img src={img} alt="" srcset="" />
                <p><span className='border-b-2 font-bold'>Info:</span> {description}</p>
                <div className='mt-4'>
                    <p><span className='border-b-2 font-bold'>Price:</span> {price}$</p>
                </div>
            </div>
            <div className='review'>

            </div>
        </div>
    );
};

export default ServiceDetails;