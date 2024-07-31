


import React from "react";

const BackButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn backButton">
      Go Back
    </button>
  );
};

export default BackButton;