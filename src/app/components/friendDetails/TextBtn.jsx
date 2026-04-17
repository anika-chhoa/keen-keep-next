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
    const newLog = {
      id: expectedFriend.id,
      name: expectedFriend.name,
      type: "Text",
      date: new Date().toLocaleDateString("en-BD", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      time:new Date().toISOString(),
    };
    setLogHistory([...logHistory, newLog]);
    setTextHistory([...textHistory, newLog]);
    toast.success(`Text with ${expectedFriend.name}`);
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
