/* eslint-disable */
import React, { createContext, useState, useEffect } from "react";
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();


export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      fetchFeedback()
  }, [])


  const fetchFeedback = async () => {
    setIsLoading(true);
    // const res = await fetch('http://localhost:3100/feedback?_sort=id&_order=desc');
    // const res = await fetch('/feedback?_sort=id&_order=desc'); // using proxy
    // const data = await res.json()
    const data = FeedbackData;        // for deploying without JSON-SERVER
    setFeedback(data);
    setIsLoading(false);
  }


  const [feedbackEdit, setFeedbackEdit] = useState({ feedbackItem: {},  edit: false });

  const handleEdit = (feedbackItem) => { 
    setFeedbackEdit({
      feedbackItem,
      edit: true
    })
  };

  
  const handleUpdate = async (feedbackItemId, feedbackItem) => {
    // const res = await fetch(`http://localhost:3100/feedback/${feedbackItemId}`, {
    // const res = await fetch(`/feedback/${feedbackItemId}`, {  // using proxy
    //   method: 'PUT',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(feedbackItem),
    // })
    // const data = await res.json()
    // setFeedback(feedback.map((item) => (item.id === feedbackItemId ? data : item )))
    setFeedback(feedback.map((item) => (item.id === feedbackItemId ? feedbackItem : item )))   // for deploying without JSON-SERVER
    setFeedbackEdit({  
      feedbackItem: {},
      edit: false
    })
  }


  const handleAdd = async (newFeedback) => {
    // const res = await fetch('http://localhost:3100/feedback', {
    //   const res = await fetch('/feedback', {      // using proxy
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(newFeedback),
    // })
    // const data = await res.json()
    // setFeedback([data, ...feedback]);
    newFeedback.id = feedback.length + 1;          // for deploying without JSON-SERVER
    setFeedback([newFeedback, ...feedback]);       // for deploying without JSON-SERVER
  }


  const handleDelete = async (feedbackItemId) => {
    if (window.confirm("Are you sure you want to delete the item?")) {
    // const res = await fetch(`http://localhost:3100/feedback/${feedbackItemId}`, {
    // const res = await fetch(`/feedback/${feedbackItemId}`, {         // using proxy
    //   method: 'DELETE',
    // })
    // res.status === 200
    //   ? setFeedback(feedback.filter((item) => item.id !== feedbackItemId))
    //   : alert('Error Deleting This Feedback')

    setFeedback(feedback.filter((item) => item.id !== feedbackItemId))  // for deploying without JSON-SERVER

    }
  }



  return (
    <FeedbackContext.Provider value={{isLoading, feedback: feedback, handleAdd, handleEdit, feedbackEdit, handleUpdate, handleDelete}}>
      {children}
    </FeedbackContext.Provider>
  );

};


export default FeedbackContext;
