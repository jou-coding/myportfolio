type Card = {
  text: string;
  description: string;
  url: string;
};
export default function Card({ text, description, url }: Card) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 shadow-lg rounded-lg w-70 p-2 ">
      <p className="text-xl hover:underline ">
        <a href={url}>{text}</a>
      </p>
      <p>{description}</p>
      <p>
        URL:
        <a className="hover:underline" href={url}>
          {url}
        </a>
      </p>
    </div>
  );
}
