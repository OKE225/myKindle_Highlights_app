interface Props {
  text: string;
  metadata: string;
}

const HighlightCard = ({ metadata, text }: Props) => {
  return (
    <div className="bg-stone-50 shadow p-5 rounded-sm">
      <h4 className="text-2xl mb-1">{text}</h4>
      <p className="text-zinc-700">{metadata}</p>
    </div>
  );
};

export default HighlightCard;
