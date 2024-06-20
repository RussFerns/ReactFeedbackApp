import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Navbar from "../components/Navbar";


const Contact = () => {
  const params = useParams();

  return (
    <div>
      <Header />
      <SubHeader subTitle="Media Feedback" style={{ marginBottom: "100px" }} />
      <div className="container">
        <Card>
          <div className="Media">
            <h1>Contact Us</h1>
            <p>Customer ID: {params.id ? params.id : <span style={{color:"red"}}> [blank] </span>} </p>
            <p>Customer Name: {params.name ? params.name : <span style={{color:"red"}}> [blank] </span>}</p>

            <Navbar />

          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
