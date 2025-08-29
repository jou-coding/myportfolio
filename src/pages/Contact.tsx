import Button from "../components/Button";

function Contact() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mb-8">Contact</h1>
      <div className="text-center mb-4">
        何か不具合などがあれば、お問い合わせください。
      </div>
      <div className="flex flex-col items-center jusify-center gap-3">
        <label htmlFor="name">お名前</label>
        <input type="text" className=" border" />
        <label htmlFor="mail">メールアドレス</label>
        <input type="email" className="border" />
        <label htmlFor="textarea">お問い合わせ内容</label>
        <textarea
          name=""
          id=""
          className="border resize h-30  w-100"
        ></textarea>
        <Button text="送信" />
      </div>
    </div>
  );
}

export default Contact;
