"use client"
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/Components/Button";
import { TiTickOutline } from "react-icons/ti";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Home() {
  const [startIndex, setStartIndex] = useState(0);
  const cardWindowLength = 5; // Number of cards visible at once
  const cards = [
    { titleimg: "/card0.jpeg", text1: "GREETING ME", text3: "0.0.2 ETH", text5: "0 ETH" },
    { titleimg: "/card1.jpeg", text1: "Coal Cats", text3: "0.54 ETH", text5: "150K ETH" },
    { titleimg: "/card2.jpeg", text1: "Unigrids", text3: "2.79 ETH", text5: "3,650 ETH" },
    { titleimg: "/card3.jpeg", text1: "pixl pets", text3: "0.10 ETH", text5: "5,435 ETH" },
    { titleimg: "/card4.jpeg", text1: "corpo", text3: "0.68 ETH", text5: "386 ETH" },
    { titleimg: "/card6.jpeg", text1: "Anata", text3: "0.54 ETH", text5: "350 ETH" },
    { titleimg: "/card7.jpeg", text1: "proscenium", text3: "0.00 ETH", text5: "150 ETH" },
    { titleimg: "/card8.jpeg", text1: "Abasho", text3: "0.20 ETH", text5: "560 ETH" },
    { titleimg: "/card9.jpeg", text1: "Age of dino", text3: "0.0.5 ETH", text5: "150 ETH" },
    { titleimg: "/card10.jpeg", text1: "Nippy", text3: "0.30 ETH", text5: "150K ETH" },
  ];

  const handlePrev = () => {
    const newIndex = startIndex - 1;
    if (newIndex >= 0) {
      setStartIndex(newIndex);
    }
  };

  const handleNext = () => {
    const newIndex = startIndex + 1;
    if (newIndex + cardWindowLength <= cards.length) {
      setStartIndex(newIndex);
    }
  };

  return (
    <main className="px-10 py-4 min-h-screen bg-black">
      <h1 className="text-white px-5 text-xl font-bold">Notable collections</h1>
      <div className="relative overflow-hidden mt-10">
      
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${startIndex * 100}%)` }}>
          {cards.map((card, index) => (
            <div key={index} className="mr-4 hover:-translate-y-3 transition-all duration-300">
              <Button
                type="button"
                titleimg={card.titleimg}
                text1={card.text1}
                svgicon={<TiTickOutline size={15} />}
                text2="Floor"
                text3={card.text3}
                text4="Total volume"
                text5={card.text5}
              />
            </div>
          ))}
        </div>
        <button className="text-white absolute top-32 -left-1" onClick={handlePrev}><FaChevronLeft size={25} /></button>
        <button className="text-white absolute top-32  -right-1" onClick={handleNext}><FaChevronRight size={25} /></button>
      </div>
    </main>
  );
}
