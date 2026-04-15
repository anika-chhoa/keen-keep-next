"use client";
import { HistoryContext } from "@/app/context/HistoryContext";
import Image from "next/image";
import { useContext } from "react";
import { toast } from "react-toastify";
import textImg from "../../../assets/text.png";

const TextBtn = ({ expectedFriend }) => {
  const { logHistory, setLogHistory, textHistory, setTextHistory } =
    useContext(HistoryContext);
  const handleTextBtn = () => {
    const isAlreadyTexted = logHistory.find(
      (text) => text.id === expectedFriend.id,
    );
    const isTexted = textHistory.find((text) => text.id === expectedFriend.id);

    if (!isAlreadyTexted) {
      setLogHistory([...logHistory, expectedFriend]);
      
    }
    if(!isTexted){
        setTextHistory([...textHistory, expectedFriend]);
        toast.success(`${expectedFriend.name} is texted`);
    }
  };

  return (
    <button
      onClick={handleTextBtn}
      className="bg-[#f8fafcFF] border border-[#e9e9e9FF] rounded-lg flex flex-col justify-center items-center gap-2 py-4"
    >
      <Image src={textImg} alt="call Image" width={26} height={26} />
      <p className="text-lg text-[#1f2937FF]">Text</p>
    </button>
  );
};

export default TextBtn;
