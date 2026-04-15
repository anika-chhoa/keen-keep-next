import Image from "next/image";
import textImg from "../../../assets/text.png";

const TextBtn = ({expectedFriend}) => {
  return (
    <div className="bg-[#f8fafcFF] border border-[#e9e9e9FF] rounded-lg flex flex-col justify-center items-center gap-2 py-4">
      <Image src={textImg} alt="call Image" width={26} height={26} />
      <p className="text-lg text-[#1f2937FF]">Text</p>
    </div>
  );
};

export default TextBtn;
