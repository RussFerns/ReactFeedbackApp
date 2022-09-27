/* eslint-disable */
import React, { createContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import FeedbackData from "../data/FeedbackData"; 

const FeedbackContext = createContext();


export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(
    FeedbackData
  //   [      // used previously before Context was completed
  //    {
  //     id: 3,
  //     rating: 8,
  //     text: 'From Context: sit amet alias voluptatem est voluptatum ipsa quae.',
  //    },
  //   ]
  );

  const [feedbackEdit, setFeedbackEdit] = useState({
    feedbackItem: {},
    edit: false
  });

  const handleEdit = (feedbackItem) => { 
    console.log("Edit click", feedbackItem.id);
    setFeedbackEdit({
      feedbackItem,
      edit: true
    })
  };

  const handleUpdate = (feedbackItemId, feedbackItem) => { 
    console.log("Update click", feedbackItem.id);
    setFeedback(feedback.map((item) => item.id === feedbackItemId 
                ? {...item, ...feedbackItem} 
                : item ))
   setFeedbackEdit({  
      feedbackItem: {},
      edit: false
    })
  };

  const handleAdd = (newFeedback) => {  
    newFeedback.id = uuidV4();
    console.log("From Context now", newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };

  const handleDelete = (feedbackItemId) => { 
    console.log("Delete click", feedbackItemId);
    if (window.confirm("Are you sure you want to delete the item?")) {
      setFeedback(feedback.filter((item) => item.id !== feedbackItemId));
    }
  };

  return (
    <FeedbackContext.Provider value={{feedback: feedback, handleAdd, handleEdit, feedbackEdit, handleUpdate, handleDelete}}>
      {children}
    </FeedbackContext.Provider>
  );

};



export default FeedbackContext;

