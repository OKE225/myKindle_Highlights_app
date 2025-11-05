import HighlightCard from "./HighlightCard";
import HighlightsCount from "./HighlightsCount";

interface Props {
  highlights: { text: string; metadata: string }[];
}

const HighlightsList = ({ highlights }: Props) => {
  return (
    <div>
      <HighlightsCount count={highlights.length} />
      <hr className="mb-5" />
      <div className="grid grid-cols-2 gap-1">
        {highlights.map((highlight) => (
          <HighlightCard
            key={highlight.metadata}
            text={highlight.text}
            metadata={highlight.metadata}
          />
        ))}
      </div>
    </div>
  );
};

export default HighlightsList;
