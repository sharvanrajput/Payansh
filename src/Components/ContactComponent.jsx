import React from 'react'
import Button from './Button'
import { MdHome } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
const ContactComponent = () => {
    return (
        <>
            <section className="ContactComp">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col">
                            <div className='map ' style={{ maxWidth: "100%", height: "500px", overflow: "hidden" , borderRadius:50 }}>
                                <iframe
                                    title="Google Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28035.393565529997!2d77.07949458950877!3d28.55702214002991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b85fc2a2d89%3A0xbef376182c43ed9d!2sIndira%20Gandhi%20International%20Airport!5e0!3m2!1sen!2sin!4v1736337020439!5m2!1sen!2sin"
                                    width="100%"
                                    height="600"
                                    style={{ border: "0" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div class="col-lg-6">
                            <div class="d-flex  more_info flex-column h-100 aos-init aos-animate" >
                                <div>
                                    <h2>HOW CAN WE HELP?</h2>
                                    <p class="pt-lg-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                                <div>

                                    <div class="d-flex   align-items-center mb-3">
                                        <MdHome className='  fs-2' />

                                        <div>
                                            <p>Plaza X , XY Floor, XYZ</p>
                                            <p>Street, XYZ</p>
                                        </div>
                                    </div>

                                    <div class="d-flex  align-items-center mb-3">
                                        <MdCall className='  fs-2' />

                                        <p>+123-456-7890</p>
                                    </div>

                                    <div class="d-flex  align-items-center mb-3">
                                        <IoIosMail className='  fs-2' />

                                        <p>yourname@email.com</p>
                                    </div>

                                </div>
                                <div>
                                    <h6>OPERATING HOURS</h6>

                                    <div class="d-flex align-items-center">
                                        <LuClock3 className='  fs-2' />

                                        <div>
                                            <p>Monday to Friday</p>
                                            <p>8:00am to 8:00pm AEDT</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="m-0 h-100 aos-init aos-animate contbox" data-aos="flip-left">
                                <h2 className='section-head heading-graident'>
                                    contact us
                                </h2>
                                <form class="d-flex flex-column">
                                    <div class="d-flex flex-lg-row flex-column">
                                        <div>
                                            <input type="text" className='' placeholder="First Name" name="firstName" />
                                        </div>
                                        <div>
                                            <input type="text" className='' placeholder="Last Name" name="lastName" />
                                        </div>
                                    </div>
                                    <div class="d-flex flex-lg-row flex-column">
                                        <div>
                                            <input type="email" placeholder="Email Address" name="email" />
                                        </div>
                                        <div>
                                            <input type="number" placeholder="Phone Number" name="phone" />
                                        </div>
                                    </div>
                                    <textarea placeholder="Message" rows="8"></textarea>
                                    <Button text="submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactComponent
