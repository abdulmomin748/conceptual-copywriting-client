import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesItem from './ServicesItem';

const Services = () => {
    const services = useLoaderData();
    return (
        <div>
            {
                services.map(serviceItem => <ServicesItem key={serviceItem._id} servicesItem={serviceItem}  />)
            }
        </div>
    );
};

export default Services;