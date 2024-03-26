"use client";
import React, { useState,useEffect } from "react";
import Image from "next/image";
import Button from "@/Components/Button";
import { TiTickOutline } from "react-icons/ti";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Home() {
  const [startIndex, setStartIndex] = useState(0);
  const [cardWindowLength, setCardWindowLength] = useState(9);
  const [translateValue, setTranslateValue] = useState(0);
  // const cardWindowLength = 9; // Number of cards visible at once
  useEffect(() => {
    // Function to calculate cardWindowLength dynamically based on screen width
    function calculateCardWindowLength() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setCardWindowLength(1); // Set cardWindowLength to 2 for smaller screens
      } else {
        setCardWindowLength(9); // Set cardWindowLength to 9 for larger screens
      }
    }

    // Call the function initially and add event listener for window resize
    calculateCardWindowLength();
    window.addEventListener("resize", calculateCardWindowLength);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", calculateCardWindowLength);
    };
  }, []);

  useEffect(() => {
    function calculateTranslateValue() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setTranslateValue(startIndex * 102); // Set translation value for lg screens
      }
      else if(screenWidth>375){
        setTranslateValue(startIndex * 135);
      }
      else if(screenWidth<375){
        setTranslateValue(startIndex * 155);
      }
       else {
        setTranslateValue(startIndex * 147); // Set translation value for mobile screens
      }
    }

    calculateTranslateValue();
    window.addEventListener("resize", calculateTranslateValue);

    return () => {
      window.removeEventListener("resize", calculateTranslateValue);
    };
  }, [startIndex]);


  const cards = [
    {
      titleimg: "/card0.jpeg",
      text1: "GREETING",
      text3: "0.0.2 ETH",
      text5: "0 ETH",
    },
    {
      titleimg: "/card1.jpeg",
      text1: "Coal Cats",
      text3: "0.54 ETH",
      text5: "150K ETH",
    },
    {
      titleimg: "/card2.jpeg",
      text1: "Unigrids",
      text3: "2.79 ETH",
      text5: "3,650 ETH",
    },
    {
      titleimg: "/card3.jpeg",
      text1: "pixl pets",
      text3: "0.10 ETH",
      text5: "5,435 ETH",
    },
    {
      titleimg: "/card4.jpeg",
      text1: "corpo",
      text3: "0.68 ETH",
      text5: "386 ETH",
    },
    {
      titleimg: "/card6.jpeg",
      text1: "Anata",
      text3: "0.54 ETH",
      text5: "350 ETH",
    },
    {
      titleimg: "/card7.jpeg",
      text1: "proscenium",
      text3: "0.00 ETH",
      text5: "150 ETH",
    },
    {
      titleimg: "/card8.jpeg",
      text1: "Abasho",
      text3: "0.20 ETH",
      text5: "560 ETH",
    },
    {
      titleimg: "/card9.jpeg",
      text1: "Age of dino",
      text3: "0.0.5 ETH",
      text5: "150 ETH",
    },
    {
      titleimg: "/card10.jpeg",
      text1: "Nippy",
      text3: "0.30 ETH",
      text5: "150K ETH",
    },
  ];

  const handlePrev = () => {
    const newIndex = startIndex - 1;
    if (newIndex >= 0) {
      setStartIndex(newIndex);
    }
  };

  const handleNext = () => {
    const newIndex = startIndex + 1;
    console.log('newIndex: ', newIndex);

    console.log("startIndex:", startIndex);
    console.log("cardWindowLength:", cardWindowLength);
    console.log("cards.length:", cards.length);

    if (newIndex + cardWindowLength <= cards.length) {
      setStartIndex(newIndex);
    }
  };

  return (
    <main className="px-2 py-4 lg:min-h-screen min-h-svh max-w-screen-xl mx-auto bg-black">      
     <div className="px-6 mx-2 py-4">
      <h1 className="text-white px-5 text-2xl lg:text-xl font-bold">Notable collections</h1>
      <div className="relative overflow-hidden mt-10">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${translateValue}%)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="mr-4 hover:-translate-y-3 transition-all duration-300"
            >
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
        {startIndex-1 >= 0 && (
        <button
          className="text-white fixed top-52 lg:top-[23%] left-2 hover:bg-[#252525] h-[260px] rounded-2xl"
          onClick={handlePrev}
        >
          <FaChevronLeft size={25} />
        </button>)}
        {startIndex + cardWindowLength < cards.length && (
          <button
            className="text-white fixed lg:top-28 top-52 right-3  lg:right-3 hover:bg-[#252525] h-[260px] rounded-2xl"
            onClick={handleNext}
          >
            <FaChevronRight className="text-center" size={25} />
          </button>
        )}{" "}
      </div>
      </div>
    </main>
  );
}
