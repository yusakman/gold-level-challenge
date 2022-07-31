import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import OurServices from "../../components/OurServices";
import Testimonial from "../../components/Testimonial";
import WhyUs from "../../components/WhyUs";
import {navList, stList, cards, testimoni, faq, info, iconFooter} from "../../const/static";
import React from "react";
import CTABanner from "../../components/CTABanner";
import FAQ from "../../components/FAQ";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";

const Home = () => {
    const [sidebar, setSidebar] = useState(true)

    const toggle = () => {
        setSidebar(!sidebar)
    }

    const props = {
        navList,
        stList,
        cards,
        testimoni,
        faq,
        info,
        iconFooter,
        sidebar,
        toggle,
    }

    return (
        <div>
            <Sidebar {...props}/>
            <Navbar {...props}/>
            <Banner/>
            <OurServices {...props}/>
            <WhyUs {...props}/>
            <Testimonial {...props} />
            <CTABanner {...props} />
            <FAQ {...props} />
            <Footer {...props}/>
        </div>
    )
}

export default Home;