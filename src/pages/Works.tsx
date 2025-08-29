import Card from "../components/Card";
function Works() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Card
        text="portfolio"
        description="自分のサイトを紹介すためのサイトです。"
      />
      <Card text="時計アプリ" description="時計を表示するサイト" />
    </div>
  );
}

export default Works;
