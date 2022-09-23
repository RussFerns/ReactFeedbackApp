import React from "react";
import PropTypes  from "prop-types";


const Card = ({ children, reverse }) => {
  return (
    // reverse style using className
    <div className={`card ${reverse && 'reverse'}`}>
      {children}
    </div>

    // reverse style using style
    // <div className={`card`}
    //      style={{ backgroundColor: reverse ? 'rgba(0, 0, 0, 0.4)' : '#fff',
    //               color: reverse ? '#fff' : '#333' }}
    // >
    //   {children}
    // </div>
  );
};


Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

Card.defaultProps = {
  reverse: false,
}

export default Card;

