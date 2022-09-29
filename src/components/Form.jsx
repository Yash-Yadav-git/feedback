import React from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import { useState, useContext, useEffect } from "react";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "./context/FeedbackContext";

const Form = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);

  //useContext
  const { feedbackEdit, updateFeedback, handleNewSubmit } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.inEditMode === true) {
      setText(feedbackEdit.feedbackText);
      setbtnDisabled(false);
    }
  }, [feedbackEdit.feedbackText]);

  const handleTextChange = (e) => {
    if (text === "") {
      setbtnDisabled(true);
      setMessage("");
    } else if (text !== "" && text.trim().length <= 10) {
      setbtnDisabled(true);
      setMessage("Text should be atlest 10 characters");
    } else {
      setbtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.inEditMode === true) {
        updateFeedback(feedbackEdit.itemId, newFeedback);
      } else {
        handleNewSubmit(newFeedback);
      }
      // handleNewSubmit(newFeedback);
      setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our services?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            value={text}
            placeholder="Write a review"
            onChange={handleTextChange}
          />
          <Button type="submit" version="primary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
