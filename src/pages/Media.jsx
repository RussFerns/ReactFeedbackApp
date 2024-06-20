import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Navbar from "../components/Navbar";

const Media = () => {
  return (
    <div>
      <Header />
      <SubHeader subTitle="Media Feedback" style={{ marginBottom: "100px" }} />
      <div className="container">
        <Card>
          <div className="Media">
            <h1>Media Page</h1>
            <div style={{textAlign: 'center', margin: "25px"}}>
              <img src="pretty2.png" alt="pretty girl" />
            </div>

            <Navbar />

          </div>
        </Card>
      </div>
    </div>
  );
};

export default Media;
