import "./AboutUs.css";
import AboutCompany from "../../components/AboutUs/AboutCompany";
import Line from "../../components/LandingPage/Line";
import EmployeeCardContainer from "../../components/AboutUs/EmployeeCardContainer";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function AboutUs() {
  return (
    <div>
      <Header />
      <AboutCompany />
      <Line />
      <EmployeeCardContainer />
      <Line />
      <Footer />
    </div>
  );
}

export default AboutUs;
