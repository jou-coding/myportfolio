function About() {
  return (
    <div className="flex  justify-center flex-col items-center gap-4 p-4">
      <h1 className="text-3xl font-bold ">About</h1>
      <div>
        IT専門学生として、フロントエンドとバックエンドの両方を学びながら
        Webアプリ開発に取り組んでいます。
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <img
          className=" w-32 h-32 md:w-48 md:h-48"
          src="./profile.png"
          alt="プロフィール画像"
        />
        <p>
          <span className="font-semibold">名前:</span> jou-coding
        </p>
        <p>
          <span className="font-semibold">スキル:</span> TypeScript / React
        </p>
        <p>
          <span className="font-semibold">目標:</span>
          フルスタックで自分のサービスを作れるようになること
        </p>
        <p></p>
        <p>
          <span className="font-semibold">Github:</span>
          <a
            href="https://github.com/jou-coding"
            className="hover:underline text-blue-600"
          >
            jou-coding
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
