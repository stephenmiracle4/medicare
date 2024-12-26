import React from "react";
import { FaInfoCircle, FaCheckCircle, FaStar, FaHeart, FaLightbulb, FaRocket } from "react-icons/fa";
import InfoCard from './InfoCard';

const CardGrid = () => {
  // Data for the cards
  const cardData = [
    {
      icon: <FaInfoCircle />,
      title: "Corneal transplant surgery",
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget....",
      link: "#",
    },
    {
      icon: <FaCheckCircle />,
      title: "Cardiothoracic Surgery",
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget...",
      link: "#",
    },
    {
      icon: <FaStar />,
      title: "General health check",
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget...",
      link: "#",
    },
    {
      icon: <FaHeart />,
      title: "Treatment ofdermatitis",
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget...",
      link: "#",
    },
    {
      icon: <FaLightbulb />,
      title: "Diagnosis & treatment of cancer",
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget...",
      link: "#",
    },
    {
      icon: <FaRocket />,
      title: "treatment of pneumonia",
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget...",
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <InfoCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
