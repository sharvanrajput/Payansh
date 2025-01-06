import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SiTicktick } from "react-icons/si";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination ,Autoplay  } from 'swiper/modules';

const HomeBenefits = () => {
    return (
        <>
            <section className="benefits">
                <div className="container">
                    <div className="row">
                        {/* Left Section */}
                        <div className="col-lg-4">
                            <div className="banner_left text-white text-lg-start text-center home-about-right">
                                <h2 className="fs-1  heading-graident">Know Your Benefits</h2>
                                <p className='fs-5'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia dignissimos tenetur at illum aspernatur consequuntur.
                                </p>
                                <ul className='list-inline'>
                                    <li className='fs-4 py-3'><span className='me-2'><SiTicktick /></span>

                                        Lorem ipsum dolor sit amet.</li>
                                    <li className='fs-4 py-3'><span className='me-2'><SiTicktick /></span>

                                        Lorem ipsum dolor sit amet.</li>
                                    <li className='fs-4 py-3'><span className='me-2'><SiTicktick /></span>

                                        Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Section with Swiper */}
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <Swiper
                                    slidesPerView={2} // Show 3 slides at a time
                                    slidesPerGroup={1} // Slide 1 at a time when navigating
                                    spaceBetween={30} // Add space between slides
                                    pagination={{
                                        clickable: true, // Make pagination dots clickable
                                    }}
                                    modules={[Pagination ,Autoplay ]} // Include the Pagination module
                                    autoplay={{
                                        delay: 1000, // 3 seconds delay
                                        disableOnInteraction: false, // Autoplay continues after user interaction
                                      }}
                                      loop={true} 
                                    className="mySwiper homebenefits_slider"
                                >
                                    <SwiperSlide>
                                        <div className="col-lg-12 ">
                                            <div className="benefit_box text-white text-center">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda eligendi quisquam deleniti.
                                                </p>
                                                <img src="../public/img/banner-right.webp" className='img-fluid ' alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="col-lg-12 ">
                                            <div className="benefit_box text-white text-center">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda eligendi quisquam deleniti.
                                                </p>
                                                <img src="../public/img/homesteps-left.webp" className='img-fluid ' alt="" />

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="col-lg-12 ">
                                            <div className="benefit_box text-white text-center">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda eligendi quisquam deleniti.
                                                </p>
                                                <img src="../public/img/banner-right.webp" className='img-fluid ' alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="col-lg-12 ">
                                            <div className="benefit_box text-white text-center">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda eligendi quisquam deleniti.
                                                </p>
                                                <img src="../public/img/homesteps-left.webp" className='img-fluid ' alt="" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="col-lg-12 ">
                                            <div className="benefit_box text-white text-center">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda eligendi quisquam deleniti.
                                                </p>
                                                <img src="../public/img/banner-right.webp" className='img-fluid ' alt="" />

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeBenefits;
