import React from 'react';
import { Link } from 'react-router-dom';

const ReviewRowItem = ({reviewItem, serialReview, handleReviewDelete}) => {
    const {serviceName, textArea,_id } = reviewItem;
    return (
        <tr className=''>
            <th>{serialReview}</th>
            <th>{serviceName}</th>
            <td>{textArea}</td>
            <td className='pr-12'>
                <button className='btn m-1 btn-primary' onClick={() => handleReviewDelete(_id)}>Delete</button>
                <Link to=''><button className='ml-5'>Edit</button></Link>
            </td>
        </tr>
    );
};

export default ReviewRowItem;