import React from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext, useEffect } from "react";
import FeedbackContext from "./context/FeedbackContext";

const FeedbackItem = ({ key, feedbackText, feedbackRating, itemId }) => {
  const { editFeedback, feedbackDelete } = useContext(FeedbackContext);

  return (
    <>
      <Card>
        <div className="num-display">{feedbackRating}</div>
        <button onClick={() => feedbackDelete(itemId)} className="close">
          <FaTimes color="purple" />
        </button>
        <button
          className="edit"
          onClick={() => {
            editFeedback(feedbackText, feedbackRating, itemId);
          }}
        >
          <FaEdit />
        </button>
        <div className="text-display">{feedbackText}</div>
      </Card>
    </>
  );
};

export default FeedbackItem;
