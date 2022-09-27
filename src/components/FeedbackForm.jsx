/* eslint-disable */
import React, { useState, useContext, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import FeedbackRating from "./FeedbackRating";
import FeedbackContext from "../context/FeedbackContext";


// const FeedbackForm = ({ handleAdd }) => { // replaced with Context API
const FeedbackForm = () => {
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackRating, setFeedbackRating] = useState(10);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { handleAdd, feedbackEdit, handleUpdate } = useContext(FeedbackContext) // using Context

  useEffect(() => {
    console.log("Hello from useFfect")
    if(feedbackEdit.edit === true) {
      setButtonDisabled(false)
      setFeedbackText(feedbackEdit.feedbackItem.text)
      setFeedbackRating(feedbackEdit.feedbackItem.rating)
    }
  }, [feedbackEdit]);

  const handleFeedbackText = ({ target: {value} }) => {
    if (value === "") {
      setButtonDisabled(true)
      setMessage(null)
    } else if(value.trim().length <= 10) {
      setButtonDisabled(true)
      setMessage("Feedback must be at least 10 characters in length")
    } else {
      setButtonDisabled(false)
      setMessage(null)
    }
    setFeedbackText(value); 
  };



  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (feedbackText.trim().length > 10) {
      const newFeedback = {
        text: feedbackText,
        rating: feedbackRating,
      }
      console.log("Form", newFeedback)

      if(feedbackEdit.edit === true) {
        handleUpdate(feedbackEdit.feedbackItem.id, newFeedback)
      } else {
        handleAdd(newFeedback)
      }

      // if (feedbackEdit.edit === true) {
      //   updateFeedback(feedbackEdit.item.id, newFeedback)
      // } else {
      //   addFeedback(newFeedback)
      // }

      setFeedbackText('')
      setFeedbackRating(10) 
      setButtonDisabled(true) 
    }
  }

  return (
    <Card>
      Feedback Form
      <form onSubmit={handleFormSubmit}>
        <h2>How would you rate your experience?</h2>
        <FeedbackRating select={setFeedbackRating} selected={feedbackRating} />
        <div className="input-group">
          <input
            type="text"
            name="feedback-text"
            id="feedback-text"
            placeholder="Write a review"
            value={feedbackText}
            onChange={handleFeedbackText}
          />
          <Button type="submit" version="primary" isDisabled={buttonDisabled}>
            Send Review
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};


export default FeedbackForm;

