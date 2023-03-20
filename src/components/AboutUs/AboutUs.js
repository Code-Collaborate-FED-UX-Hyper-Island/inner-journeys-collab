import "./AboutUs.css";
import AboutCompany from "./AboutCompany";
import Line from "../LandingPage/Line";
import EmployeeCardContainer from "./EmployeeCardContainer";

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
