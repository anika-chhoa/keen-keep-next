"use client"
import { HistoryContext } from "@/app/context/HistoryContext";
import Image from "next/image";
import { useContext } from "react";
import { toast } from "react-toastify";
import videoImg from "../../../assets/video.png";
const VideoCallBtn = ({ expectedFriend }) => {
  const { logHistory, setLogHistory, videoHistory, setVideoHistory } =
    useContext(HistoryContext);

  const handleVideoCallBtn = () => {
    const isAlreadyVideoCallLog = logHistory.find(
      (video) => video.id === expectedFriend.id,
    );
    const isVideoCalled = videoHistory.find(
      (video) => video.id === expectedFriend.id,
    );
    if (!isAlreadyVideoCallLog) {
      setLogHistory([...logHistory, expectedFriend]);
    }
    if (!isVideoCalled) {
      setVideoHistory([...videoHistory, expectedFriend]);
      toast.success(`${expectedFriend.name} is video calling...`);
    }
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
