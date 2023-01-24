export default function Option({ handleOptionClick, correct, answer }) {
  return (
    <button
      correct={correct}
      onClick={() => {
        handleOptionClick(correct);
      }}
    >
      {answer}
    </button>
  );
}
