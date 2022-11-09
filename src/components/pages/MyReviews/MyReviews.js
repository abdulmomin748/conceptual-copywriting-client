import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import ReviewRowItem from './ReviewRowItem';
import '../../All.css'
import Swal from 'sweetalert2';
const MyReviews = () => {
    const [reviews, setReviews] = useState([])
    const {user} = useContext(AuthContext);
    let serialReview = 1;
    useEffect(() => {
        fetch(`http://localhost:5000/myReviews?userEmail=${user.email}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    }, [user?.email])
    console.log(reviews)
    const handleReviewDelete = id => {
        fetch(`http://localhost:5000/myReviews/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                Swal.fire({
                    icon: 'success',
                    title: `Review Deleted Succesfully!`,
                    timer: 2000
                });
                const remaining = reviews.filter(rvwItm => rvwItm._id !== id);
                setReviews(remaining)
            }
        })
    }
    return (
        <div className='pt-24 max-w-7xl mx-auto'>
            <h1 className='text-4xl text-center font-bold uppercase  mb-16'>Reviews details here.</h1>
            <div>
                {
                    reviews.length > 0 ?  (
                        <div className="overflow-x-auto">
                            <table className="table w-full text-white">
                                {/* <!-- head --> */}
                                <thead>
                                    <tr className='text-xl'>
                                        <th className='text-xl'>Total</th>
                                        <th className='text-xl'>Service Name</th>
                                        <th className='text-xl'>Review</th>
                                        <th className='text-xl'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        reviews.map(reviewItem => <ReviewRowItem handleReviewDelete={handleReviewDelete} serialReview={serialReview++} key={reviewItem._id} reviewItem ={reviewItem}/>)     
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                    :
                    (
                      <h3 className='text-center text-3xl min-h-[50vh]'>"No reviews were added"</h3>  
                    )
                }
            </div>
        </div>
    );
};

export default MyReviews;