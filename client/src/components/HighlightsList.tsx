import Highlight from "./Highlight";

interface Props {
  highlights: [];
}

const HighlightsList = ({ highlights }: Props) => {
  console.log(highlights);
  return (
    <div>
      <p className="mt-1 text-zinc-700">{highlights.length} Highlights</p>
      <hr className="my-5" />
      <div className="grid grid-cols-2 gap-1">
        {highlights.map((highlight) => (
          <Highlight info={highlight} />
        ))}
      </div>
    </div>
  );
};

export default HighlightsList;
