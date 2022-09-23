import React from "react";
import PropTypes  from "prop-types";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback received yet</p>;
  } else {
    return (
      <div className="feedback-list">
        {feedback.map((feedbackItem, index) => (<FeedbackItem key={index} feedbackItem={feedbackItem} />))}
      </div>
    );
  }
};


FeedbackList.propTypes = {
  feedback: PropTypes.array.isRequired,
}

export default FeedbackList;
