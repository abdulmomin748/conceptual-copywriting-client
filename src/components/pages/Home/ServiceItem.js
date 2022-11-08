import React from 'react';
import SvcItem from '../Services/SvcItem';

const ServiceItem = ({serviceItem}) => {
    return (
        <>
            <SvcItem serviceItem={serviceItem} />
        </>
    );
};

export default ServiceItem;