import React from 'react'

const AllPageBanner = (props) => {
  return (
    <>
      <section className="Allpagebanner">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="banner_left text-white text-center">
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
