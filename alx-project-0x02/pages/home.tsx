import { Post } from "@/interfaces";
import React, { useState} from "react";
import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";
import  PostModal  from "@/components/common/PostModal";




const Home: React.FC = () => {
  const [cards, setCards] = useState<Post[]>([
    {
      title: "Welcome to Our Site",
      content: "This is the first card component with some introductory content.",
    },
    {
      title: "Features",
      content: "Our platform offers great features to help you get started quickly.",
    },
    {
      title: "Contact Us",
      content: "Have any questions? Reach out to our support team anytime.",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCard = (title: string, content: string) => {
    setCards([...cards, { title, content }]);
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}

        {/* Add New Card Button styled as a card */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg shadow-md p-4 cursor-pointer hover:bg-gray-50 transition"
        >
          <span className="text-3xl text-gray-400 font-bold">+ Add New Card</span>
      </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddCard}
        />
      </div>
    </>
  );
}

export default Home;