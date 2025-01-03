import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className=''>

                <div className="container d-flex   justify-content-between align-items-center ">
                    <div className="logo ">
                        <img src="../public/img/logo.png" width={180} alt="" />
                    </div>
                    <div className="pages ms-auto d-lg-block d-none">
                        <ul className='list-inline d-flex '>
                            <li className='nav-items' >Home</li>
                            <li className='nav-items' >About</li>
                            <li className='nav-items' >Contact</li>
                            <li className='nav-items' >Features</li>
                            <li className='nav-items' >Blog</li>
                        </ul>
                    </div>
                    <div className="mobile_btn d-lg-none d-block">
                    <button className="btn text-light fs-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <i className="bi bi-list fw-bold"></i>
                </button>
                    </div>
                </div>





          

                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel"> <img src="../public/img/logo.png" width={180} alt="" /></h5>
                        <button type="button" className="btn-close text-reset bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="mobile_nav">
                            <div className="logo">
                               
                            </div>
                            <div className="pages ms-auto">
                                <ul className='list-inline d-flex flex-column '>
                                    <li className='nav-items'>Home</li>
                                    <li className='nav-items'>About</li>
                                    <li className='nav-items'>Contact</li>
                                    <li className='nav-items'>Features</li>
                                    <li className='nav-items'>Blog</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>




            </nav>

        </>
    )
}

export default Navbar
