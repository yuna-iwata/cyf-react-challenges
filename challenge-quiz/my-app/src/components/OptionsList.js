import { useState, useEffect } from "react";
import Option from "./Option";

export default function OptionsList({
  questionsData,
  questionNum,
  handleOptionClick,
}) {
  const [options, setOptions] = useState([]);

  const createOptionsArray = () => {
    if (questionsData.length > 0) {
      const incorrectAnswers = questionsData[questionNum].incorrect_answers;
      const optionsArr = incorrectAnswers.map((item) => {
        return { answer: item, correct: false };
      });
      const correctAnswer = questionsData[questionNum].correct_answer;
      const randomIdx = Math.floor(Math.random() * 3);
      optionsArr.splice(randomIdx, 0, { answer: correctAnswer, correct: true });
      setOptions(optionsArr);
      console.log(optionsArr);
    }
  };

  useEffect(() => {
    createOptionsArray();
  }, [questionsData, questionNum]);

  return (
    <div>
      {options.length > 0
        ? options.map((option, idx) => {
            return (
              <Option
                key={idx}
                correct={option.correct}
                handleOptionClick={handleOptionClick}
                answer={option.answer}
              />
            );
          })
        : null}
    </div>
  );
}
