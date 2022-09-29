import React from "react";
import { Link } from "react-router-dom";
import Card from "../shared/Card";

const AboutPage = () => {
  return (
    <Card>
      <h1>This is about page</h1>
      <Link to="/">
        <h1>Home</h1>
      </Link>
    </Card>
  );
};

export default AboutPage;
