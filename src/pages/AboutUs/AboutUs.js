import "./AboutUs.css";
import AboutCompany from '../../components/AboutUs/AboutCompany';
import Line from "../../components/LandingPage/Line";
import EmployeeCardContainer from "../../components/AboutUs/EmployeeCardContainer";

function AboutUs() {
    return (
        <div>
            <AboutCompany />
            <Line />
            <EmployeeCardContainer />
            <Line />
        </div>
    );
}

export default AboutUs;
