type Button = {
  text: string;
};
export default function Button({ text }: Button) {
  return (
    <div className="px-6 py-4 bg-blue-100 hover:bg-blue-300 rounded-lg shadow-lg mt-0">
      {text}
    </div>
  );
}
