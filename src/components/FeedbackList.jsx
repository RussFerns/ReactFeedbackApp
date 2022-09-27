/* eslint-disable */
import React, { useContext } from "react";
// import PropTypes from "prop-types";
// import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";


// const FeedbackList = ({ feedback, handleDelete, setFeedback }) => {  // before using Context API
const FeedbackList = ({ setFeedback }) => {
  const {feedback} = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return <p>No feedback received yet</p>;
  } else {
    // With Animation // Not using it here...
    // return (
    //   <div className="feedback-list">
    //     <AnimatePresence>
    //     {feedback.map((feedbackItem, index) => (
    //       <motion-div key={index} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} >
    //       <FeedbackItem
    //         key={index}
    //         feedbackItem={feedbackItem}
    //         handleDelete={handleDelete}
    //         setFeedback={setFeedback}
    //       />
    //       </motion-div>
    //     ))}
    //     </AnimatePresence>
    //   </div>
    //   );
    // Without Animation
    
    return (
      <div className="feedback-list">
        {feedback.map((feedbackItem, index) => (
          <FeedbackItem
            key={index}
            feedbackItem={feedbackItem}
            // handleDelete={handleDelete} // Replaced with Context API
            setFeedback={setFeedback}
          />
        ))}
      </div>
      );
  }
};


// FeedbackList.propTypes = {
//   feedback: PropTypes.array.isRequired,
// };


export default FeedbackList;
