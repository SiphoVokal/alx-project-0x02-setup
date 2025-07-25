import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return(
    <div>
      <div className= "rounded-lg shadow-white p-4 max-w-md py-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-500">{content}</p>
      </div>
    </div>
  );
}

export default Card;