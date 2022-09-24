/* eslint-disable */
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from './data/FeedbackData';
import FeedbackStats from "./components/FeedbackStats";


function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const title = "Welcome to the Feedback App"
  const subTitle = "Provide your feedback below"
  const bgColor = 'lightPink'
  const textColor = 'red'

  const handleDelete = (feedbackItemId) => {
    console.log("click", feedbackItemId)
    if(window.confirm('Are you sure you want to delete the item?')) {
      setFeedback(feedback.filter((item) => item.id !== feedbackItemId))
    }
  }

  return (
    <React.Fragment>
    <Header title={title} bgColor={bgColor} textColor={textColor} />
    <SubHeader subTitle={subTitle}/>
    <div className="container">
      <h1>Feedback App</h1>
      <FeedbackStats feedback={feedback} />
      <FeedbackList feedback={feedback} handleDelete={handleDelete} setFeedback={setFeedback}/>
    </div>
    </React.Fragment>
  );
}


export default App;

