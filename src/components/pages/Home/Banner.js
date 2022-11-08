import React from 'react';
import bnrImg from '../../../assets/bnr.jpeg'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[90vh] text-center">
                <div id="slide1" className="carousel-item relative bg-cover flex justify-center items-center bg-no-repeat w-full" style={{backgroundImage: `url(${bnrImg})`}}>
                    <div className="max-w-5xl custom-bnnr">
                        <h1 className="mb-5 text-6xl font-bold">I’M JANE</h1>
                        <h2 className="mb-5 text-5xl font-bold text-white">A CONCEPTUAL COPYWRITER</h2>
                        <button className="btn btn-primary">Services</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative bg-cover flex justify-center items-center bg-no-repeat w-full" style={{backgroundImage: `url(${bnrImg})`}}>
                    <div className="max-w-5xl custom-bnnr">
                        <h1 className="mb-5 text-6xl font-bold">I’M JANE</h1>
                        <h2 className="mb-5 text-5xl font-bold text-white">A CONCEPTUAL COPYWRITER</h2>
                        <button className="btn btn-primary">Services</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative bg-cover flex justify-center items-center bg-no-repeat w-full" style={{backgroundImage: `url(${bnrImg})`}}>
                    <div className="max-w-5xl custom-bnnr">
                        <h1 className="mb-5 text-6xl font-bold">I’M JANE</h1>
                        <h2 className="mb-5 text-5xl font-bold text-white">A CONCEPTUAL COPYWRITER</h2>
                        <button className="btn btn-primary">Services</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative bg-cover flex justify-center items-center bg-no-repeat w-full" style={{backgroundImage: `url(${bnrImg})`}}>
                    <div className="max-w-5xl custom-bnnr">
                        <h1 className="mb-5 text-6xl font-bold">I’M JANE</h1>
                        <h2 className="mb-5 text-5xl font-bold text-white">A CONCEPTUAL COPYWRITER</h2>
                        <button className="btn btn-primary">Services</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Banner;