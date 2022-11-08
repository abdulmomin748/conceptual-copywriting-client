import React from 'react';
import { Link } from 'react-router-dom';
import SvcItem from './SvcItem';

const ServicesItem = ({serviceItem}) => {
    return (
        <>
            <SvcItem servicesItem={serviceItem}/>
        </>
    );
};

export default ServicesItem;