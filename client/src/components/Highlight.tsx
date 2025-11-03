interface Props {
  info: {
    metadata: string;
    text: string;
  };
}

const Highlight = ({ info: { metadata, text } }: Props) => {
  return (
    <div className="bg-brown-100 p-5 rounded-sm">
      <h4 className="text-2xl mb-1">{text}</h4>
      <p className="text-zinc-700">{metadata}</p>
    </div>
  );
};

export default Highlight;
