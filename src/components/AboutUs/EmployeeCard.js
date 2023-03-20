import React from "react";
import SmallLine from "./SmallLine";
import "./EmployeeCard.css";

const EmployeeCard = ({ name, title, image }) => {
  return (
    <div className="employeeCardContainer">
      <img src={image} className="employeeImage" alt="employeeImage" />
      <div className="employeeName">{name}</div>
      <SmallLine />
      <div className="employeeTitle">{title}</div>
    </div>
  );
};

export default EmployeeCard;
