import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewRowItem = ({reviewItem, serialReview, handleReviewDelete, dfltValue}) => {
    const {serviceName, textArea,_id } = reviewItem;
    // const [pass, setPas] = useState(_id)

    const handleUpdata = (event, id) => {
        event?.preventDefault();
        const form = event?.target;
        const textArea = form?.textArea?.value;
        const updateReview = {
            textArea,
        }
        console.log(updateReview, id);
    // fetch(`http://localhost:5000/myReviews/${id}`,{
    //     method: 'PATCH',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify()
    // })
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data);
    // })
    // .catch(err => console.error(err))

}

    return (
        <tr className=''>
            <th>{serialReview}</th>
            <th>{serviceName}</th>
            <td>{textArea}</td>
            <td className='pr-12'>
                <button className='btn m-1 btn-primary pt-1' onClick={() => handleReviewDelete(_id)}>Delete</button>
                <label htmlFor="my-modal" className='ml-5 cursor-pointer'>Edit</label>
                <div className='modal-container'>
                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal text-whit bg-[#ebe9ee] bg-opacity-80">
                        <div className="modal-box bg-[#fff] relative">
                            <h3 className="font-bold text-xl">Service: {serviceName}</h3>
                            <div className='flex flex-col'>
                            <form onSubmit={(event) => handleUpdata(event, _id)}>
                                <textarea name='textArea' defaultValue={dfltValue} className="textarea text-[18px] w-full h-40" placeholder={dfltValue}></textarea>
                                <div>
                                     <button className='btn btn-primary mt-4 pt-1'  
                                     type='submit'>Update Review</button>
                                     {/* onClick={() => handleUpdata() */}
                                </div>
                            </form>
                            <div className="modal-action mt-0 absolute bottom-6 btn btn-ghost right-5">
                                <label htmlFor="my-modal"  className="inline-block font-bold text-xl text-black cursor-pointer">X</label>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
            <div>
            </div>
        </tr>
        
    );
};

export default ReviewRowItem;