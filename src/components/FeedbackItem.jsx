/* eslint-disable */
import React, { useState } from "react";
import PropTypes  from "prop-types";
import { FaTimes } from 'react-icons/fa';
import Card from "./Card";


const FeedbackItem = ({ feedbackItem, handleDelete, setFeedback }) => {
  // console.log(feedbackItem)
  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState('Example Feedback item');
  const upRating = () => {
    setFeedback([
        {
          id: feedbackItem.id,
          rating: feedbackItem.rating +1,
          text: feedbackItem.text,
        }
      ]
    )
  }
  const downRating = () => {
    setFeedback(
      [
        {
          id: feedbackItem.id,
          rating: feedbackItem.rating -1,
          text: feedbackItem.text,
        }
      ]
    )
  }

  
  if (!feedbackItem || feedbackItem.length === 0) {
    return <p>No feedback received yet</p>
  } else {
    return (
      <Card className="card" reverse={false}>
        <div className="num-display">{feedbackItem.rating}</div>
        <div className="text-display"><h3># {feedbackItem.id}</h3></div>
        <button className="close" onClick={() => {handleDelete(feedbackItem.id)}}>
          <FaTimes color="purple"/>
        </button>
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
