"use client";
import { HistoryContext } from "@/app/context/HistoryContext";
import Image from "next/image";
import { useContext } from "react";
import { toast } from "react-toastify";
import videoImg from "../../../assets/video.png";
const VideoCallBtn = ({ expectedFriend }) => {
  const { logHistory, setLogHistory, videoHistory, setVideoHistory } =
    useContext(HistoryContext);

  const handleVideoCallBtn = () => {
    const newLog = {
      id: expectedFriend.id,
      name: expectedFriend.name,
      type: "Video",
      date: new Date().toLocaleDateString("en-BD", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      time: new Date().toISOString(),
    };
    setLogHistory([...logHistory, newLog]);
    setVideoHistory([...videoHistory, newLog]);
    toast.success(`Video with ${expectedFriend.name}`);
  };
  return (
    <button
      onClick={handleVideoCallBtn}
      className="bg-[#f8fafcFF] border border-[#e9e9e9FF] rounded-lg flex flex-col justify-center items-center gap-2 py-4"
    >
      <Image src={videoImg} alt="call Image" width={26} height={26} />
      <p className="text-lg text-[#1f2937FF]">Video</p>
    </button>
  );
};

export default VideoCallBtn;
