import HighlightCard from "./HighlightCard";
import HighlightsCount from "./HighlightsCount";

interface Props {
  highlights: [];
}

const HighlightsList = ({ highlights }: Props) => {
  return (
    <div>
      <HighlightsCount count={highlights.length} />
      <hr className="my-5" />
      <div className="grid grid-cols-2 gap-1">
        {highlights.map((highlight) => (
          <HighlightCard info={highlight} />
        ))}
      </div>
    </div>
  );
};

export default HighlightsList;
