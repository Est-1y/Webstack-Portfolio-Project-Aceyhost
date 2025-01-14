import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Esther from "../../assets/Esther.jpeg";
import Millicent from "../../assets/Millicent.jpeg";
import Amy from "../../assets/Amy.jpeg";
import Umpass from "../../assets/Umpass.jpeg";

const Team = (props) => {
  return (
    <div className="Credibility w-full max-w-[1440px] my-20 ">
      <div className="pb-12 text-center">
        <h3 className="text-purple-700"> {props.header} </h3>
        <h5 className="pt-4"> {props.text} </h5>
      </div>

      <div className="flex flex-col justify-center  px-10 md:px-16 xl:px-[180px] sm:grid sm:grid-cols-2  lg:grid-cols-4 gap-10">
        <div className="TeamImageBox text-center">
          <div className="bg-zinc-800 rounded-full rounded-br-none w-[220px] inline-block h-[220px] mr-2 overflow-hidden">
            <img className="w-full object-cover" src={Umpass} alt="Umpass"></img>
          </div>
          <div className="inline-block">
            <h5 className="text-[24px] sm:text-[20px]">Umpass U</h5>
            <div className="flex text-[30px]">
              <FaFacebook className="pr-2 hover:scale-105 cursor-pointer" />
              <FaTwitter className="pr-2 hover:scale-110 cursor-pointer" />
              <FaWhatsapp className="pr-2 hover:scale-105 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="TeamImageBox text-center">
          <div className="bg-zinc-800 rounded-full rounded-br-none w-[220px] inline-block h-[220px] mr-2 overflow-hidden">
            <img className="w-full object-cover" src={Amy} alt="Amy"></img>
          </div>
          <div className="inline-block">
            <h5 className="text-[24px] sm:text-[20px]">Amy A</h5>
            <div className="flex text-[30px]">
              <FaFacebook className="pr-2 hover:scale-105 cursor-pointer" />
              <FaTwitter className="pr-2 hover:scale-110" />
              <FaWhatsapp className="pr-2 hover:scale-105 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="TeamImageBox text-center">
          <div className="bg-zinc-800 rounded-full rounded-br-none w-[220px] inline-block h-[220px] mr-2 overflow-hidden">
            <img className="w-full object-cover" src={Millicent} alt="Millicent"></img>
          </div>
          <div className="inline-block">
            <h5 className="text-[24px] sm:text-[20px]">Millicent A</h5>
            <div className="flex text-[30px]">
              <FaFacebook className="pr-2 hover:scale-105 cursor-pointer" />
              <FaTwitter className="pr-2 hover:scale-110 cursor-pointer" />
              <FaWhatsapp className="pr-2 hover:scale-105 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="TeamImageBox text-center">
          <div className="bg-zinc-800 rounded-full rounded-br-none w-[220px] inline-block h-[220px] mr-2 overflow-hidden">
            <img className="w-full object-cover" src={Esther} alt="Esther"></img>
          </div>
          <div className="inline-block">
            <h5 className="text-[24px] sm:text-[20px]">Esther A</h5>
            <div className="flex text-[30px]">
              <FaFacebook className="pr-2 hover:scale-105 cursor-pointer" />
              <FaTwitter className="pr-2 hover:scale-110 cursor-pointer" />
              <FaWhatsapp className="pr-2 hover:scale-105 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
