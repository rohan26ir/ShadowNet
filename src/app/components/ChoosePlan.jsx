import React from 'react';
import Image from 'next/image';
import { PiCheckBold } from "react-icons/pi";

const ChoosePlan = () => {
  const boxCard = [
    {
      id: 1,
      title: "Free Plan",
      image: "/premium.svg",
      points: [
        {
          id: 11,
          icon: <PiCheckBold />,
          features: [
            "Unlimited Bandwidth",
            "Encrypted Connection",
            "No Traffic Logs",
            "Works on All Devices"
          ]
        }
      ],
      price: "Free",
      Select: "https://react-icons.github.io/"
    },
    {
      id: 2,
      title: "Standard Plan",
      image: "/premium.svg",
      points: [
        {
          id: 12,
          icon: <PiCheckBold />,
          features: [
            "Unlimited Bandwidth",
            "Encrypted Connection",
            "Yes Traffic Logs",
            "Works on All Devices",
            "Connect Anywhere"
          ]
        }
      ],
      price: "$9 / mo",
      Select: "https://react-icons.github.io/"
    },
    {
      id: 3,
      title: "Premium Plan",
      image: "/premium.svg",
      points: [
        {
          id: 13,
          icon: <PiCheckBold />,
          features: [
            "Unlimited Bandwidth",
            "Encrypted Connection",
            "Yes Traffic Logs",
            "Works on All Devices",
            "Connect Anywhere",
            "Get New Features"
          ]
        }
      ],
      price: "$12 / mo",
      Select: "https://react-icons.github.io/"
    },
  ];

  return (
    <div className="py-10">
      {/* Heading */}
      <div className="text-center w-[90%] md:w-[80%] mx-auto ">
        <h2 className="text-3xl font-bold">Choose Your Plan</h2>
        <p className="mt-2 text-gray-600">
          Let's choose the package that is best for you and explore it happily and cheerfully.
        </p>
      </div>

      {/* Cards Section */}
      <div className="w-[90%] md:w-[80%] mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {boxCard.map((card) => (
            <div key={card.id} className="flex flex-col h-full p-6 border rounded-lg text-center shadow-lg bg-white">
              
              {/* Image */}
              <div className="flex justify-center">
                <Image src={card.image} alt={card.title} width={100} height={100} />
              </div>
              
              {/* Title */}
              <h2 className="text-xl font-semibold py-5">{card.title}</h2>

              {/* Middle Section  */}
              <div className="flex-grow">
                <ul className="text-left space-y-2">
                  {card.points.map((point) =>
                    point.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        {point.icon} {feature}
                      </li>
                    ))
                  )}
                </ul>
              </div>

              {/* Below Section */}
              <div className="mt-auto pt-5">
                <p className="text-lg font-bold text-gray-800">{card.price}</p>
                <a href={card.Select}>
                  <button className="mt-3 px-6 py-2 text-white bg-red-500 cursor-pointer rounded-3xl">
                    Select
                  </button>
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;
