import { useEffect, useState } from "react";
import Card from "../components/Card";
import { supabase } from "../supabaseClient";

type Card = {
  id: number;
  name: string;
  description: string;
  url: string;
};

function Works() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      const { data, error } = await supabase.from("Cards").select("*");
      if (error) {
        console.error(error);
      } else {
        setCards(data as Card[]);
      }
    };
    fetchCards();
  }, []);
  return (
    <div className="flex  justify-center flex-col items-center p-4">
      <h1 className="text-3xl font-bold ">Works</h1>
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        {cards.map((card) => (
          <Card
            key={String(card.id)}
            text={card.name}
            description={card.description}
            url={card.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Works;
