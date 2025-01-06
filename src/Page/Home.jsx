import React from 'react'
import { DownloadAppHome, Faq, Footer, HomeAbout, HomeBanner, HomeBenifits, HomeSteps, Hometextmonial,  Services } from '../Components'

const Home = () => {
    return (
        <>
            <HomeBanner />
            <Services />
            <HomeAbout />
            <HomeSteps />
            <HomeBenifits />
            <DownloadAppHome />
            <Hometextmonial />
            
            <Faq />
        </>
    )
}

export default Home
