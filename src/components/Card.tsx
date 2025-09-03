type Card = {
  text: string;
  description: string;
  url: string;
};
export default function Card({ text, description, url }: Card) {
  return (
    <div className="flex flex-col justify-center items-center gap-8 shadow-lg p-4 rounded-lg w-100 ">
      <p className="text-xl hover:underline">
        <a href={url}>{text}</a>
      </p>
      <p>{description}</p>
      <p>
        URL:{" "}
        <a className="hover:underline" href={url}>
          {url}
        </a>
      </p>
    </div>
  );
}
