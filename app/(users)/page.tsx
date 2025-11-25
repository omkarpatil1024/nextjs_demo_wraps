import Card from "@/components/Card";
import Image from "next/image";
import offer from "../../public/OfferBiz.png";
interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

export default function Home() {

  const cards: CardData[] = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Modern and responsive web applications using the latest technologies.',
      imageUrl: 'https://picsum.photos/seed/webdev/800/600' 
    },
    {
      id: 2,
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications with React Native.',
      imageUrl: 'https://picsum.photos/seed/mobile/800/600' 
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces for better user experience.',
      imageUrl: 'https://picsum.photos/seed/design/800/600' 
    }
  ];

  const handleLearnMore = (id: number) => {
    console.log(`Learn more clicked for card ${id}`);
    // Add your navigation or other logic here
  };
  return (
   <main>
   <div className="flex flex-wrap justify-center vertical-align-center">
  
     {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          onButtonClick={() => handleLearnMore(card.id)}
        />
      ))}
   </div>
     <Image src={offer} alt="offer" priority={false} width={200} height={200} className="align-center margin-auto" placeholder="blur" blurDataURL={offer.src} quality={100}/>
   </main>
  );
}
