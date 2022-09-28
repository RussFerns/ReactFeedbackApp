/* eslint-disable */
import React, { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackRating = ({ select, selected }) => {
  // const [ratingSelected, setRatingSelected] = useState(10);

  const { feedbackEdit } = useContext(FeedbackContext) // using Context

  const handleRatingChange = (e) => {
    select(+e.currentTarget.value)
    // console.log('Rating:', +e.currentTarget.value)
  };

  return (
    <div>
      Feedback Rating
      <ul className="rating">
        {/* Using an array expander 'Array.from' to generate  <li> items */}
        {Array.from({ length: 10 }, (_, i) => (
          <li key={`rating-${i + 1}`}>
            <input
              type="radio"
              id={`num${i + 1}`}
              name="rating"
              value={i + 1}
              onChange={handleRatingChange}
              checked={selected === i + 1}
            />
            <label htmlFor={`num${i + 1}`}>{i + 1}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackRating;

