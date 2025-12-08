type ParagraphProps = {
  text: string;
};

export default function Paragraph({ text }: ParagraphProps) {
  return (
    <div className="my-2">
      <p>{text}</p>
    </div>
  );
}
