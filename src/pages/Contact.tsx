import Hedear from "../components/Header";

function Contact() {
  return (
    <div>
      <Hedear />
      <h1>Contact</h1>

      <div>何か不具合などがあれば、お問い合わせください。</div>
      <div>
        <label htmlFor="name">お名前</label>
        <input type="text" />
        <label htmlFor="mail">メールアドレス</label>
        <input type="email" />
        <label htmlFor="textarea">お問い合わせ内容</label>
        <textarea name="" id=""></textarea>
        <button>送信</button>
      </div>
    </div>
  );
}

export default Contact;
