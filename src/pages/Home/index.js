import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import OurServices from "../../components/OurServices";
import Testimonial from "../../components/Testimonial";
import WhyUs from "../../components/WhyUs";
import {navList, stList, cards, testimoni} from "../../const/static";
import React from "react";
import CTABanner from "../../components/CTABanner";
import FAQ from "../../components/FAQ";
const Home = () => {
    const props = {
        navList,
        stList,
        cards,
        testimoni,
    }

    return (
        <div>
            <Navbar {...props}/>
            <Banner/>
            <OurServices {...props}/>
            <WhyUs {...props}/>
            <Testimonial {...props} />
            <CTABanner {...props} />
            <FAQ {...props} />
            <Footer />
        </div>
    )
}

export default Home;