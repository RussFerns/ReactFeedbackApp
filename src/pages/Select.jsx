import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Navbar from "../components/Navbar";


const Select = () => {
  const navigate = useNavigate();

  const handleClick = (custId, custName) => {
    alert(`Customer Contact Info: ${custId}, ${custName}`);
    navigate(`/contact/${custId}/${custName}`);
  };  

  return (
    <div>
      <Header />
      <SubHeader subTitle="Media Feedback" style={{ marginBottom: "100px" }} />
      <div className="container">
        <Card>
          <div className="Media">
            <h1>Select Customer</h1>

            <button style={{padding:"3px 6px"}} onClick={() => handleClick('283746', 'Bubby Ferns')}>View Contact Info</button>

            <Navbar />

          </div>
        </Card>
      </div>
    </div>
  );
};

export default Select;
