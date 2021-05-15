import React from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is Fun" },
  { id: "q2", author: "Chad", text: "Learning React is Great" },
];

const QuoteDetail = () => {
  const params = useParams();

  return (
    <React.Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>
  );
};

export default QuoteDetail;
