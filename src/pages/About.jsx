import React from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Navbar from "../components/Navbar";


const About = () => {
  return (
    <div>
      <Header />
      <SubHeader subTitle="About Feedback" style={{ marginBottom: "100px" }} />
      <div className="container">
        <Card>
          <div className="about">
            <h1>About this Application</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              neque sapiente recusandae incidunt tenetur aut, soluta vero
              laboriosam nisi libero?
            </p>
            <p>Version 1.1.0</p>

            <Navbar />

          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
