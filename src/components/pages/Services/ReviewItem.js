import React from 'react';

const ReviewItem = ({reviewItem}) => {
    return (
        <div>
            <img src={reviewItem.userPhoto} alt="" srcset="" />
            <p>{reviewItem.textArea}</p>
        </div>
    );
};

export default ReviewItem;