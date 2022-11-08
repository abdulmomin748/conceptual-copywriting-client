import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import avater from '../../../assets/avatar.png'
import star from '../../../assets/star.png'
import ReviewItem from './ReviewItem';
const ServiceDetails = () => {
    const {description, img, price, serviceName, _id} = useLoaderData();
    const {user} = useContext(AuthContext)
    const [review, setReview] = useState([])
    console.log(review)
    const userPhoto = user?.photoURL;
    useEffect(() => {
        fetch('http://localhost:5000/displayReview')
        .then(res => res.json())
        .then(data => {
            setReview(data);
        })
    },[])
    // add review
    const handlePost = event => {
        event.preventDefault();
        const form = event.target;
        const textArea = form.textarea.value;
        const review = {textArea, userPhoto}
        fetch('http://localhost:5000/addReview',{
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err));
    }


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
            <div className='review mt-20'>
                <h1 className='text-4xl text-center font-bold uppercase  mb-16'>All Reviews</h1>
                <div className='text-right  border rounded p-5'>
                    <div className='review-details border-dashed border-b-2 mb-12 pb-8'>
                        {
                            review.map(reviewItem => <ReviewItem key={reviewItem._id} reviewItem={reviewItem} />)
                        }
                    </div>
                    <div>
                        <form action="" onSubmit={handlePost}>
                            <div className='mb-8'>
                                {
                                    user?.photoURL ? <div className='flex items-center'>
                                            <img className='rounded-full w-20 h-20 ml-auto'src={user?.photoURL} alt="User" srcset="" />
                                            <div className='text-left ml-3'>
                                                <h5 className='text-2xl'>{user?.displayName}</h5>
                                                <p>Your review will be posted publically on the web.</p>
                                            </div>
                                        </div>
                                    :
                                    <div className='flex items-center justify-end'>
                                        <img src={avater} alt="Avater" srcset="" />
                                        <div className='text-left ml-3'>
                                                <h5 className='text-2xl'>{user?.displayName}</h5>
                                                <p>Your review will be posted publically on the web.</p>
                                            </div>
                                    </div>   
                                }
                                <div className='flex justify-end'>
                                    <Link><img src={star} alt="" srcset="" /></Link>
                                    <Link><img src={star} alt="" srcset="" /></Link>
                                    <Link><img src={star} alt="" srcset="" /></Link>
                                    <Link><img src={star} alt="" srcset="" /></Link>
                                    <Link><img src={star} alt="" srcset="" /></Link>
                                </div>
                            </div>
                            <div>
                                <textarea name='textarea' className="textarea textarea-bordered w-full resize-none h-48 text-[20px] text-white max-w-3xl" placeholder="Describe your exprerience..."></textarea>
                            </div>
                            <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Review</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;