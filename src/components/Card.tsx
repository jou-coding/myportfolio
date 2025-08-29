type Card = {
  text: string;
  description: string;
};
export default function Card({ text, description }: Card) {
  return (
    <div className="flex flex-col justify-center items-center gap-8 shadow-lg p-4 rounded-lg w-100 ">
      <img src="" alt="説明" />
      <p className="text-xl">{text}</p>
      <p>{description}</p>
    </div>
  );
}
