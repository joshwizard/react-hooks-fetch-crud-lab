import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => setQuiz(data));
  }, []);

  function handleDeleteQuestion(id) {
    setQuiz(quiz.filter((question) => question.id !== id));
  }

  function handleUpdateQuestion(updatedQuestion) {
    setQuiz(quiz.map((question) =>
      question.id === updatedQuestion.id ? updatedQuestion : question
    ));
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {quiz.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDeleteQuestion={handleDeleteQuestion}
            onUpdateQuestion={handleUpdateQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
