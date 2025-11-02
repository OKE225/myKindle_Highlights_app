interface Props {
  info: {
    metadata: string;
    text: string;
  };
}

const Highlight = ({ info: { metadata, text } }: Props) => {
  return (
    <div className="my-15">
      <h3 className="text-2xl">{text}</h3>
      <p>{metadata}</p>
    </div>
  );
};

export default Highlight;
