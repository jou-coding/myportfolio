function About() {
  return (
    <div className="flex  justify-center flex-col items-center gap-4 p-4">
      <h1 className="text-3xl font-bold ">About</h1>
      <div>webアプリの制作をしています。</div>
      <div className="flex flex-col justify-center items-center">
        <img className=" h-25 w-auto" src="./profile.png" alt="画像" />
        <p>名前:jou-coding</p>
        <p>内容:フロントエンドとバックエンドの開発の勉強しています。</p>
        <p>
          Github:
          <a href="https://github.com/jou-coding" className="hover:underline">
            jou-coding
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
