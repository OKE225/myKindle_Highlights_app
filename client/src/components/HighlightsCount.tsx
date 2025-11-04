interface Props {
  count: number;
}

const HighlightsCount = ({ count }: Props) => {
  return <p className="mt-1 text-zinc-700">{count} Highlights</p>;
};

export default HighlightsCount;
