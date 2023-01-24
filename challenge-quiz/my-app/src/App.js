import "./App.css";
import { useState, useEffect } from "react";
import OptionsList from "./components/OptionsList";

function App() {
  const [questionsData, setQuestionsData] = useState([]);
  const [questionNum, setQuestionNum] = useState(0);
  const [question, setQuestion] = useState("");
  const [numOfCorrect, setNumOfCorrect] = useState(0);
  const [numOfLives, setNumOfLives] = useState(3);
  const [correctClicked, setCorrectClicked] = useState();

  const fetchData = async () => {
    try {
      const url =
        "https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple";
      const response = await fetch(url);
      const data = await response.json();
      setQuestionsData(data.results);
    } catch (e) {
      console.log("error message", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOptionClick = (correct) => {
    setCorrectClicked(correct);
    setQuestionNum(questionNum + 1);
    if (correct) {
      setNumOfCorrect(numOfCorrect + 1);
    } else {
      setNumOfLives(numOfLives - 1);
    }
  };

  useEffect(() => {
    if (questionsData.length > 0) {
      setQuestion(questionsData[questionNum].question);
    }
  }, [questionNum, questionsData]);

  return (
    <div className="App">
      <h3>Correct:{numOfCorrect}</h3>
      <h3>Lives:{numOfLives}</h3>
      <h4>{question}</h4>
      <OptionsList
        questionsData={questionsData}
        questionNum={questionNum}
        handleOptionClick={handleOptionClick}
      />
    </div>
  );
}

export default App;
