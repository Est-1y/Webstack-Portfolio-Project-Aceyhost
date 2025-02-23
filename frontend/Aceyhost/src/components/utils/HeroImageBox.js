// import
import React from "react";
import h4Image from "../../assets/h4.jpg";

const HeroImageBox = (props) => {
  return (
    <div className="my-auto relative pt-12">
      <div className="img-wrap overflow-hidden bg-zinc-700 rounded-[100px] rounded-tr-none sm:w-[90%] md:ml-auto relative">
        <img className="w-full h-[75vh] object-cover" src={h4Image} alt="Bungalow" />
      </div>
      <div className="absolute top-[75%]">
        <p className="button text-xl py-10 px-5">{props.p}</p>
      </div>
    </div>
  );
};

export default HeroImageBox;