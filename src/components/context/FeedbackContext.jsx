import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is feedback number 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This is feedback number 2",
      rating: 4,
    },
    {
      id: 3,
      text: "This is feedback number 3",
      rating: 7,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    feedbackText: "",
    feedbackRating: 10,
    itemId: "",
    inEditMode: false,
  });

  const handleNewSubmit = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = (feedbackText, feedbackRating, itemId) => {
    setFeedbackEdit({
      feedbackText,
      feedbackRating,
      itemId,
      inEditMode: true,
    });
  };
  const updateFeedback = (id, updateItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updateItem } : item
      )
    );
  };
  const feedbackDelete = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackDelete,
        handleNewSubmit,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
