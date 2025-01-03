import React from 'react'
import { DownloadAppHome, Faq, HomeAbout, HomeBanner, HomeBenifits, HomeSteps, Services } from '../Components'

const Home = () => {
    return (
        <>
            <HomeBanner />
            <Services />
            <HomeAbout />
            <HomeSteps />
            <HomeBenifits />
            <DownloadAppHome />
            <Faq />
        </>
    )
}

export default Home
