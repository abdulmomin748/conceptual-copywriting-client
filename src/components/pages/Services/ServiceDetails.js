import React, { useContext } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import avater from '../../../assets/avatar.png'
import star from '../../../assets/star.png'
const ServiceDetails = () => {
    const {description, img, price, serviceName, _id} = useLoaderData();
    const {user} = useContext(AuthContext)
    console.log(user)
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
                    <form action="">
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
                            <textarea className="textarea textarea-bordered w-full resize-none h-48 text-[20px] text-white max-w-3xl" placeholder="Describe your exprerience..."></textarea>
                        </div>
                        <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Review</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;