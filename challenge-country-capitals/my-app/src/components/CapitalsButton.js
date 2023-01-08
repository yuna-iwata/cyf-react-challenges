export default function CapitalsButtons({ capital, correct, onCapitalClick }) {
  return (
    <div>
      <button
        onClick={() => {
          onCapitalClick(correct);
        }}
      >
        {capital}
      </button>
    </div>
  );
}
