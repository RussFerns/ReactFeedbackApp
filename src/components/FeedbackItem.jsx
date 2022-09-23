/* eslint-disable */
import React, { useState } from "react";
import PropTypes  from "prop-types";
import Card from "./Card";

const FeedbackItem = ({ feedbackItem }) => {
  console.log(feedbackItem)
  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState('Example Feedback item');
  const upRating = () => {
    setRating(rating +1)
  }
  const downRating = () => {
    setRating(rating -1)
  }

  if (!feedbackItem || feedbackItem.length === 0) {
    return <p>No feedback received yet</p>
  } else {
    return (
      <Card className="card" reverse={true}>
        <div className="num-display">{feedbackItem.rating}</div>
        <div className="text-display"><h3># {feedbackItem.id}</h3></div>
        <div className="text-display">{feedbackItem.text}</div>
        <button className="btn btn-primary " onClick={upRating}>UpRating</button>
        <button className="btn btn-primary " onClick={downRating}>DownRating</button>
      </Card>
    );
  }
  
}; 

FeedbackItem.propTypes = {
  feedbackItem: PropTypes.object.isRequired,
}



export default FeedbackItem;
