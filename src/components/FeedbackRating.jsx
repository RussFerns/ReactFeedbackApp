/* eslint-disable */
import React from "react";

const FeedbackRating = ({ select, selected }) => {

  const handleRatingChange = (e) => {
    select(+e.currentTarget.value)
  };

  return (
    <div>
      <ul className="rating">
        {/* Using an array expander 'Array.from' to generate  <li> items */}
        {Array.from({ length: 10 }, (_, i) => (
          <li key={`rating-${i + 1}`}>
            <input type="radio"  id={`num${i + 1}`}  name="rating"  value={i + 1}
              onChange={handleRatingChange} checked={selected === i + 1}
            />
            <label htmlFor={`num${i + 1}`}>{i + 1}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackRating;

