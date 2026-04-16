"use client";
import { HistoryContext } from "@/app/context/HistoryContext";
import Image from "next/image";
import { useContext } from "react";
import { toast } from "react-toastify";
import callImg from "../../../assets/call.png";

const CallBtn = ({ expectedFriend }) => {
  const { logHistory, setLogHistory, callHistory, setCallHistory } =
    useContext(HistoryContext);

  const handleCallBtn = () => {
    const newLog = {
      id: expectedFriend.id,
      name: expectedFriend.name,
      type: "Call",
      date: new Date().toLocaleDateString("en-BD", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
    setLogHistory([...logHistory, newLog]);
    setCallHistory([...callHistory, newLog]);
    toast.success(`Call with ${expectedFriend.name}`);
  };

  return (
    <button
      onClick={handleCallBtn}
      className="bg-[#f8fafcFF] border border-[#e9e9e9FF] rounded-lg flex flex-col justify-center items-center gap-2 py-4"
    >
      <Image src={callImg} alt="call Image" width={26} height={26} />
      <p className="text-lg text-[#1f2937FF]">Call</p>
    </button>
  );
};

export default CallBtn;
