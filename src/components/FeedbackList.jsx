import React from "react";
import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <p>No feedback Item</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        // console.log(item.rating);
        return (
          <FeedbackItem
            key={item.id}
            itemId={item.id}
            feedbackText={item.text}
            feedbackRating={item.rating}
            // handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default FeedbackList;
