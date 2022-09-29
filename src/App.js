import "./index.css";
import { FeedbackProvider } from "./components/context/FeedbackContext";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import Stats from "./components/Stats";
import Form from "./components/Form";
import AboutPage from "./components/pages/AboutPage";
import Link from "./Routes/Links";

function App() {
  return (
    <>
      <FeedbackProvider>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Form />
                  <Stats />
                  <FeedbackList />
                </>
              }
            />
          </Routes>
        </div>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Link />
      </FeedbackProvider>
    </>
  );
}

export default App;
