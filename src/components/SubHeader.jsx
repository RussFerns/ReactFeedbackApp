/* eslint-disable */
import React from "react";

function SubHeader({ subTitle = "Feedback below" }) {
  const subHeaderStyles = {
    backgroundColor: 'rgba(0,0,0,0.4',
    color: '#ff6a95',
    marginTop: '1px',
  };

  return (
    <header style={subHeaderStyles}>
      <div className="container" >
        <h2>{subTitle}</h2>
      </div>
    </header>
  );
}


export default SubHeader;
