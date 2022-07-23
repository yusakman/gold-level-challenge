import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import OurServices from "../../components/OurServices";
import {navList, stList} from "../../const/static";

const Home = () => {
    const props = {
        navList,
        stList,
    }

    return (
        <div>
            <Navbar {...props}/>
            <Banner/>
            <OurServices {...props}/>
            <Footer />
        </div>
    )
}

export default Home;