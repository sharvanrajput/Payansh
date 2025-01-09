import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const AllPageBanner = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <>
      <section className="Allpagebanner">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="banner_left text-white text-center" data-aos="fade-up">
                <h1 className="banner-heading heading-graident">{props.heading}</h1>
                <p>{props.para}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AllPageBanner
