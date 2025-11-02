import Highlight from "./Highlight";

interface Props {
  highlights: [];
}

const HighlightsList = ({ highlights }: Props) => {
  console.log(highlights);
  return (
    <div>
      <p>{highlights.length} Highlights</p>
      {highlights.map((highlight) => (
        <Highlight info={highlight} />
      ))}
    </div>
  );
};

export default HighlightsList;
