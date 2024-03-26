import React from "react";
import Slider from "react-slick";

type Buttonprops = {
  type: "button" | "submit";
  titleimg?: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  svgicon?: any;
};

const Button = ({
  type,
  titleimg,
  text1,
  text2,
  text3,
  text4,
  svgicon,
  text5,
}: Buttonprops) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <button className={`shadow-lg border-transparent px-2 mt-5`} type={type}>
      <div className="">
        <div>
          {titleimg && (
            <img className="lg:w-[210px] object-fill bg-center lg:h-[150px] w-[400px] h-[300px] rounded-t-2xl" src={titleimg} alt="Title" />
          )}
        </div>
        <div className="bg-[#252525] px-2 rounded-b-2xl w-[400px] lg:w-[210px]">
          <div className="flex gap-3 lg:gap-2 px-6 py-2">
            <h1 className="text-2xl lg:text-xl text-white font-bold">{text1}</h1>
            <div className="bg-[#2081E2] rounded-full lg:w-[15px] my-2   lg:h-[15px] lg:my-2">
              <p className="text-white text-center">{svgicon}</p>
            </div>
          </div>
          <div className="flex lg:flex-row gap-5 px-3">
            <div className="mt-0">
              <p className="text-[#9A9A9A] text-xl  lg:text-sm font-bold">{text2}</p>
              <p className="lg:text-[12px] text-base text-white font-bold mb-5 mt-1">{text3}</p>
            </div>
            <div>
              <p className="text-[#9A9A9A] text-xl  lg:text-sm font-bold">{text4}</p>
              <p className="lg:text-[12px] text-base text-white font-bold mb-5 mt-1">{text5}</p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Button;
