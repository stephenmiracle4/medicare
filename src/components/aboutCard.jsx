import React from 'react';
import { FaApple, FaAndroid, FaWindows, FaLinux } from 'react-icons/fa';

const CardSection = () => {
  const cards = [
    {
      icon: <FaApple className="text-4xl text-white" />,
      title: 'Qualified Doctors',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac vestibulum turpis. Quisque eget nisl quis orci tincidunt suscipit non at lorem.',
    },
    {
      icon: <FaAndroid className="text-4xl text-white" />,
      title: '24 hours service',
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce id velit ac nisl fringilla tristique.',
    },
    {
      icon: <FaWindows className="text-4xl text-white" />,
      title: 'modern equipment',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    },
    {
      icon: <FaLinux className="text-4xl text-white" />,
      title: 'conscientious Doctors',
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.',
    },
  ];

  return (
    <div className="flex flex-wrap">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`w-full sm:w-1/2 lg:w-1/4 p-4 flex flex-col items-center text-center`}
          style={{
            height: '250px', // Adjust card height
            backgroundColor: index % 2 === 0 ? '#3f97da' : '#4ea2e2', // Alternate background color
          }}
        >
          {/* Icon */}
          {card.icon}

          {/* Title */}
          <h2 className="text-xl font-bold text-white mt-4">{card.title}</h2>

          {/* Description */}
          <p className="text-white mt-2">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
