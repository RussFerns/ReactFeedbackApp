/* eslint-disable */
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from './data/FeedbackData';


function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const title = "Welcome to the Feedback App"
  const subTitle = "Provide your feedback below"
  const bgColor = 'lightPink'
  const textColor = 'red'

  return (
    <React.Fragment>
    <Header title={title} bgColor={bgColor} textColor={textColor} />
    <SubHeader subTitle={subTitle}/>
    <div className="container">
      <h1>Feedback App</h1>
      <FeedbackList feedback={feedback}/>
    </div>
    </React.Fragment>
  );
}


export default App;
