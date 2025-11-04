import HighlightCard from "./HighlightCard";

interface Props {
  highlights: [];
}

const HighlightsList = ({ highlights }: Props) => {
  return (
    <div>
      <p className="mt-1 text-zinc-700">{highlights.length} Highlights</p>
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
