import "./AboutCompany.css";
import imageAboutUs from "./imageAboutUs.png";

function AboutCompany() {
  return (
    <div className="aboutCompanyContainer">
      <h2 className="aboutCompanyTitle">Om oss</h2>
      <div className="infoCompanyContainer">
        <img src={imageAboutUs} alt="" className="aboutCompanyImage" />
        <div className="aboutCompanyText">
          <h3>
            Ett företag med syfte att stödja vårt samhälles pågående
            paradigmskifte
          </h3>
          <p>
            Vi är en del av Björnbacka retreatcenter, ett företag med syfte att
            stödja vårt samhälles pågående paradigmskifte med bas i inre
            hållbarhet och navigation.
          </p>
          <p>
            Världen befinner sig i ett skifte - alltifrån hur vi använder
            jordens resurser till hur vi driver företag och beter oss mot
            varandra som medmänniskor. Den holistiska hälsan, det vill säga den
            hälsa som avser hela vårt välbefinnande; det fysiska, mentala,
            emotionella och existentiella, har blivit alltmer aktuell och
            efterfrågad.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutCompany;
