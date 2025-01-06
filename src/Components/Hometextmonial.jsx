import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation , Autoplay} from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { FaStar } from "react-icons/fa";


const Hometextmonial = () => {
    const swiperRef = useRef(null);
    return (
        <>
            <section className="textmonial">
                <div className="container">
                    <div className="row">

                        <div className="col">
                            <div className="banner_left text-white text-center home-about-right">
                                <h2 className="fs-1  heading-graident">Know Your Benefits</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, animi voluptas dolore facere consequatur aut quis hic reiciendis error nostrum.</p>
                            </div>
                        </div>

                    </div>
                    <div className="row  position-relative">



                        <div className="swiper-container"  >
                            {/* Custom Previous Button */}
                            <button
                                className="custom-prev"
                                onClick={() => swiperRef.current?.slidePrev()} // Go to previous slide
                            >
                                <FaChevronLeft />
                            </button>

                            {/* Swiper Component */}
                            <Swiper
                                onSwiper={(swiper) => (swiperRef.current = swiper)} // Store swiper instance in ref
                                modules={[Navigation, Autoplay]} // Use modules array
                                slidesPerView={1}
                                slidesPerGroup={1}
                                spaceBetween={30}
                                autoplay={{
                                  delay: 1000, // 3 seconds delay
                                  disableOnInteraction: false, // Autoplay continues after user interaction
                                }}
                                loop={true}  // Infinite loop mode

                            >
                                <SwiperSlide>
                                    <div className="col">

                                        <div className="review_box text-white text-center " style={{ maxWidth: 1000, margin: "auto" }}>
                                            <div className="userimg overflow-hidden rounded-circle mx-auto  mb-3">
                                                <img src="../public/img/user1.webp" className='img-fluid' alt="" />
                                            </div>
                                            <div className="riview_cots ">
                                                <img src="../public/img/review_cots.svg" className='img-fluid' alt="" />
                                            </div>
                                            <div className="user_disc mb-3 px-5">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sunt? Aspernatur explicabo accusamus at non suscipit recusandae, facere iusto dolor illo eaque sunt est rem dolorum commodi, odit sapiente excepturi! .</p>
                                            </div>
                                            <div className="user_star text-warning mb-2">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>

                                            <user className="name">Sharvan rajput</user>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="col">

                                        <div className="review_box text-white text-center " style={{ maxWidth: 1000, margin: "auto" }}>
                                            <div className="userimg overflow-hidden rounded-circle mx-auto  mb-3">
                                                <img src="../public/img/user1.webp" className='img-fluid' alt="" />
                                            </div>
                                            <div className="riview_cots ">
                                                <img src="../public/img/review_cots.svg" className='img-fluid' alt="" />
                                            </div>
                                            <div className="user_disc mb-3 px-5">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sunt? Aspernatur explicabo accusamus at non suscipit recusandae, facere iusto dolor illo eaque sunt est rem dolorum commodi, odit sapiente excepturi! .</p>
                                            </div>
                                            <div className="user_star text-warning mb-2">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>

                                            <user className="name">Sharvan rajput</user>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="col">

                                        <div className="review_box text-white text-center " style={{ maxWidth: 1000, margin: "auto" }}>
                                            <div className="userimg overflow-hidden rounded-circle mx-auto  mb-3">
                                                <img src="../public/img/user1.webp" className='img-fluid' alt="" />
                                            </div>
                                            <div className="riview_cots ">
                                                <img src="../public/img/review_cots.svg" className='img-fluid' alt="" />
                                            </div>
                                            <div className="user_disc mb-3 px-5">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sunt? Aspernatur explicabo accusamus at non suscipit recusandae, facere iusto dolor illo eaque sunt est rem dolorum commodi, odit sapiente excepturi! .</p>
                                            </div>
                                            <div className="user_star text-warning mb-2">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>

                                            <user className="name">Sharvan rajput</user>
                                        </div>
                                    </div>
                                </SwiperSlide>



                            </Swiper>

                            {/* Custom Next Button */}
                            <button
                                className="custom-next btn "
                                onClick={() => swiperRef.current?.slideNext()} // Go to next slide
                            >
                                <FaChevronRight />
                            </button>
                        </div>

                    </div>

                </div>

            </section>


        </>
    )
}

export default Hometextmonial
