import React from "react";
import PropTypes from 'prop-types'


const FeedbackStats = ({ feedback }) => {
  let averageRating = feedback.reduce((accumulator, current) => {
    return accumulator + current.rating / feedback.length;
  }, 0);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {averageRating.toFixed(1)} </h4>
    </div>
  );
};

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
