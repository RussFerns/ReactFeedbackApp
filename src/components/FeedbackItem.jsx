/* eslint-disable */
import React, { useContext } from "react";
import PropTypes  from "prop-types";
import { FaTimes, FaEdit } from 'react-icons/fa';
import Card from "./Card";
import FeedbackContext from "../context/FeedbackContext";


const FeedbackItem = ({ feedbackItem }) => {  
  const {handleDelete, handleEdit } = useContext(FeedbackContext) 
  
  if (!feedbackItem || feedbackItem.length === 0) {
    return <p>No feedback received yet</p>
  } else {
    return (
      <Card className="card" reverse={false}>

        <div className="num-display">{feedbackItem.rating}</div>
        <div className="text-display"><h3># {feedbackItem.id}</h3></div>

        <button className="edit" onClick={() => {handleEdit(feedbackItem)}}> <FaEdit color="purple"/></button>
        <button className="close" onClick={() => {handleDelete(feedbackItem.id)}}><FaTimes color="red"/></button>

        <div className="text-display">{feedbackItem.text}</div>

      </Card>
    );
  }
}; 

FeedbackItem.propTypes = {
  feedbackItem: PropTypes.object.isRequired,
}


export default FeedbackItem;

