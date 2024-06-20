/* eslint-disable */
// import React, { useState } from "react"; // replaced with Context
import React from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { v4 as uuidV4 } from "uuid"; // transfered to FeedbackContect with use of Context
import "./App.css";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import FeedbackList from "./components/FeedbackList";
// import FeedbackData from "./data/FeedbackData"; transfered to FeedbackContect with use of Context
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import AboutLink from "./components/AboutLink";
import {FeedbackProvider} from './context/FeedbackContext';


function App() {
  // const [feedback, setFeedback] = useState(FeedbackData); // replaced with Context
  const title = "Welcome to the Feedback App";
  const subTitle = "Provide your feedback below";
  const bgColor = "lightPink";
  const textColor = "red";

  // const handleAdd = (newFeedback) => {  // replaced with Context
  //   newFeedback.id = uuidV4();
  //   console.log("App", newFeedback);
  //   setFeedback([newFeedback, ...feedback]);
  // };

  // const handleDelete = (feedbackItemId) => { // replaced with Context
  //   console.log("click", feedbackItemId);
  //   if (window.confirm("Are you sure you want to delete the item?")) {
  //     setFeedback(feedback.filter((item) => item.id !== feedbackItemId));
  //   }
  // };

  return (
    <FeedbackProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={
              <React.Fragment>
                <Header title={title} bgColor={bgColor} textColor={textColor} />
                <SubHeader subTitle={subTitle} />
                <div className="container">
                  <h1>Feedback App</h1>
                  <AboutLink />
                  <FeedbackForm 
                    // handleAdd={handleAdd} // replaced with Context
                  />
                  <FeedbackStats 
                    // feedback={feedback} // replaced with Context
                  />
                  <FeedbackList
                    // feedback={feedback} // replaced with Context
                    // handleDelete={handleDelete} // replaced with Context
                    // setFeedback={setFeedback} // replaced with Context
                  /> 
                  <AboutLink /> 
                </div>
              </React.Fragment>
            } >
          </Route>
          <Route exact path="/about" element={
          <About />
            } >
          </Route>
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
