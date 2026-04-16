import Image from "next/image";
import callImg from "../../../assets/call.png";
import textImg from "../../../assets/text.png";
import videoImg from "../../../assets/video.png";
const Logs = ({ log }) => {
  const getLog = () => {
    if (log.type === "Call") {
      return (
        <div className="flex gap-4">
          <div className="flex justify-center items-center">
            <Image src={callImg} alt="call" width={30} height={30} />
          </div>
          <div>
            <p className="text-lg text-[#64748bFF]">
              <span className="text-xl text-[#244d3fFF] font-semibold">Call</span> with {log.name}
            </p>
            <p className="text-[#64748bFF] font-semibold">{log.date}</p>
          </div>
        </div>
      );
    }

    if (log.type === "Text") {
      return (
        <div className="flex gap-4">
          <div className="flex justify-center items-center"><Image src={textImg} alt="text" width={30} height={30} /></div>
          <div>
            <p className="text-lg text-[#64748bFF]">
            <span className="text-xl text-[#244d3fFF] font-semibold">Text</span> with {log.name}
          </p>
          <p className="text-[#64748bFF] font-semibold">{log.date}</p>
          </div>
        </div>
      );
    }

    if (log.type === "Video") {
      return (
        <div className="flex gap-4">
          <div className="flex justify-center items-center"><Image src={videoImg} alt="text" width={30} height={30} /></div>
          <div>
            <p className="text-lg text-[#64748bFF]">
            <span className="text-xl text-[#244d3fFF] font-semibold">Video</span> with {log.name}
          </p>
          <p className="text-[#64748bFF] font-semibold">{log.date}</p>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="bg-white border border-[#e9e9e9FF] rounded-lg p-4">
      <div>{getLog()}</div>
    </div>
  );
};

export default Logs;
