import React from "react";
import Link from "next/link";


interface Card {
  children: React.ReactNode;
}

const Card: React.FC<Card> = ({ children }) => {
  return (
    <div className="flex flex-col shadow-md rounded-lg w-full">
      {children}
      
    </div>
  );
}

export default Card;