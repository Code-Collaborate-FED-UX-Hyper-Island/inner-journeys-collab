import "./FirstPage.css";

function FirstPage({ button }) {
  return (
    <div className="firstPageContainer">
      <h1 className="titleFirstPage">INNER JOURNEY</h1>
      <p className="infoFirstPage">
        En samlingsplats med upplevelser utöver det vanliga. Genuint
        välbefinnande uppstår när vi tar hans om både vår fysiska och mentala
        hälsa, likaväl som den emotionella och existeniella. Vi är här för att
        tjäna ett skifte till en medveten värld.
      </p>
      {button}
    </div>
  );
}

export default FirstPage;
