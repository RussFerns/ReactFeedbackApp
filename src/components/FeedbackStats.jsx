import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";


const FeedbackStats = () => {
  const {feedback} = useContext(FeedbackContext)

  let averageRating = feedback.reduce((accumulator, current) => {
    return accumulator + current.rating;
  }, 0) / feedback.length;

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {averageRating.toFixed(1)} </h4>
    </div>
  );
};

export default FeedbackStats;

