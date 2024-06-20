/* eslint-disable */
import React, { createContext, useState, useEffect } from "react";
// import { v4 as uuidV4 } from "uuid";  // replaced with JSONServer
// import FeedbackData from "../data/FeedbackData"; // replaced with JSONServer

const FeedbackContext = createContext();



export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  // const [feedback, setFeedback] = useState(   // replaced with JSONServer below
  //   FeedbackData
  //   [      // used previously before Context was completed
  //    {
  //     id: 3,
  //     rating: 8,
  //     text: 'From Context: sit amet alias voluptatem est voluptatum ipsa quae.',
  //    },
  //   ]
  // );
  const [feedback, setFeedback] = useState([]);


  useEffect(() => {
      fetchFeedback()
  }, [])

  // =========    Fetch Feedback from DB/JSON Server ============================================
  const fetchFeedback = async () => {
    const res = await fetch('https://json-rest-server.herokuapp.com/feedback?_sort=id&_order=desc')
    // const res = await fetch('http://localhost:3100/feedback?_sort=id&_order=desc')
    const data = await res.json()
    setFeedback(data)
    setIsLoading(false)
  }



  // =========    Manage Edits ==================================================================
  const [feedbackEdit, setFeedbackEdit] = useState({
    feedbackItem: {},
    edit: false
  });

  const handleEdit = (feedbackItem) => { 
    // console.log("Edit click", feedbackItem.id);
    setFeedbackEdit({
      feedbackItem,
      edit: true
    })
  };



  // =========    Update Feedback in DB/JSON Server =============================================
  // const handleUpdate = (feedbackItemId, feedbackItem) => {  // replaced with JSONServer below 
  //   console.log("Update click", feedbackItem.id);
  //   setFeedback(feedback.map((item) => item.id === feedbackItemId  ? {...item, ...feedbackItem}  : item ))
  //  setFeedbackEdit({  
  //     feedbackItem: {},
  //     edit: false
  //   })
  // };

  
  const handleUpdate = async (feedbackItemId, feedbackItem) => {
    // const feedbackToUpdate = await fetchFeedbackToUpdate(feedbackItemId)
    const res = await fetch(`https://json-rest-server.herokuapp.com/feedback/${feedbackItemId}`, {
    // const res = await fetch(`http://localhost:3100/feedback/${feedbackItemId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(feedbackItem),
    })
    const data = await res.json()
    setFeedback(feedback.map((item) => (item.id === feedbackItemId ? data : item )))
    setFeedbackEdit({  
      feedbackItem: {},
      edit: false
    })
  }




  // =========    Add Feedback to DB/JSON Server ================================================
  // const handleAdd = (newFeedback) => {  // replaced with JSONServer below 
  //   newFeedback.id = uuidV4();
  //   console.log("From Context now", newFeedback);
  //   setFeedback([newFeedback, ...feedback]);
  // };

  const handleAdd = async (newFeedback) => {
    const res = await fetch('https://json-rest-server.herokuapp.com/feedback', {
    // const res = await fetch('http://localhost:3100/feedback', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })
    const data = await res.json()
    setFeedback([data, ...feedback]);
  }




  // =========    Delete Feedback from DB/JSON Server ===========================================
  // const handleDelete = (feedbackItemId) => {  // replaced with JSONServer below 
  //   console.log("Delete click", feedbackItemId);
  //   if (window.confirm("Are you sure you want to delete the item?")) {
  //     setFeedback(feedback.filter((item) => item.id !== feedbackItemId));
  //   }
  // };

  const handleDelete = async (feedbackItemId) => {
    if (window.confirm("Are you sure you want to delete the item?")) {
    const res = await fetch(`https://json-rest-server.herokuapp.com/feedback/${feedbackItemId}`, {
    // const res = await fetch(`http://localhost:3100/feedback/${feedbackItemId}`, {
      method: 'DELETE',
    })
    res.status === 200
      ? setFeedback(feedback.filter((item) => item.id !== feedbackItemId))
      : alert('Error Deleting This Feedback')
    }
  }



  return (
    <FeedbackContext.Provider value={{isLoading, feedback: feedback, handleAdd, handleEdit, feedbackEdit, handleUpdate, handleDelete}}>
      {children}
    </FeedbackContext.Provider>
  );

};



export default FeedbackContext;

