import Image from "next/image";
import { LuArchive } from "react-icons/lu";
import { RiDeleteBin5Line, RiNotificationSnoozeLine } from "react-icons/ri";
import callImg from "../../../assets/call.png";
import textImg from "../../../assets/text.png";
import videoImg from "../../../assets/video.png"


const friendsPromise = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};
const getStatusBg = (status) => {
  if (status === "Almost Due") return "bg-[#efad44]";
  if (status === "Overdue") return "bg-[#ef4444]";
  if (status === "On-Track") return "bg-[#244d3f]";
};

const CardDetails = async ({ params }) => {
  const friends = await friendsPromise();
  const { id } = await params;
  console.log(id, "params id")
  const expectedFriend = friends.find((friend) => friend.id == id);
  const {
    name,
    picture,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = expectedFriend;
  console.log(name,bio)

  return (
    <div className="bg-[#f8fafcFF]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-20 max-w-7xl mx-auto">
      <div className="md:col-span-1">
        <div className="bg-white shadow-md rounded-lg text-center p-6 flex flex-col justify-center items-center mb-4">
          <Image
            src={picture}
            alt={name}
            width={80}
            height={80}
            className="rounded-full mx-auto"
          />
          <p className="text-xl font-semibold mt-3">{name}</p>
          <div
            className={`p-2 rounded-[100px] text-white text-[12px] font-medium mt-2 ${getStatusBg(status)} `}
          >
            {status}
          </div>
          <div className="flex gap-2 justify-center items-center mt-2 text-[12px] font-medium">
            {tags.map((tag, ind) => {
              return (
                <div
                  key={ind}
                  className="p-2 bg-[#cbfadbFF] rounded-[100px] text-[#244d3fFF] uppercase font-medium"
                >
                  <small>{tag}</small>
                </div>
              );
            })}
          </div>
          <p className="m-3 text-slate-500 italic font-medium">"{bio}"</p>
          <p className="text-slate-500 text-sm">Preferred: email</p>
        </div>
        <div className="bg-white border border-[#e9e9e9FF] rounded-sm p-4 flex justify-center items-center gap-2">
          <div className="flex justify-center items-center">
            <RiNotificationSnoozeLine />
          </div>
          <p className="uppercase font-semibold text-[#1f2937FF]">
            Snooze 2 weeks
          </p>
        </div>
        <div className="bg-white border border-[#e9e9e9FF] rounded-sm p-4 flex justify-center items-center gap-2 my-2">
          <div className="flex justify-center items-center">
            <LuArchive />
          </div>
          <p className="font-semibold text-[#1f2937FF]">Archive</p>
        </div>
        <div className="bg-white border border-[#e9e9e9FF] rounded-sm p-4 flex justify-center items-center gap-2 text-red-500">
          <div className="flex justify-center items-center">
            <RiDeleteBin5Line />
          </div>
          <span className="font-semibold text-red-500">Deleted</span>
        </div>
      </div>
      <div className="md:col-span-2 flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className='px-4 pt-8 rounded-lg bg-white shadow-md text-center'>
                <p className='text-[#244d3fFF] text-xl lg:text-3xl font-semibold'>{days_since_contact}</p>
                <p className='text-slate-500 text-lg mt-2'>Days Since Contact</p>
            </div>
          <div className='px-4 py-8 lg:p-8 rounded-lg bg-white shadow-md text-center'>
                <p className='text-[#244d3fFF] text-xl lg:text-3xl font-semibold'>{goal}</p>
                <p className='text-slate-500 text-lg mt-2'>Goal (Days)</p>
            </div>
          <div className='px-4 py-8 lg:p-8 rounded-lg bg-white shadow-md text-center'>
                <p className='text-[#244d3fFF] text-xl lg:text-3xl font-semibold'>{next_due_date}</p>
                <p className='text-slate-500 text-lg mt-2'>Next Due</p>
            </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
          <div className=" mb-4 flex justify-between">
            <p className="text-[#244d3fFF] text-xl font-medium">Relationship Goal</p>
            <button className="btn text-[#1f2937FF] text-sm font-semibold">Edit</button>
          </div>
          <div>
            <p className="text-slate-500 text-lg">Connect every <span className="text-[#244d3fFF] text-lg font-semibold">30 Days</span></p>
          </div>
          
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
            <p className="text-[#244d3fFF] text-xl font-medium mb-4">Quick Check-In</p>
            <div className="grid grid-cols-3 gap-8">
              <div className="bg-[#f8fafcFF] border border-[#e9e9e9FF] rounded-lg flex flex-col justify-center items-center gap-2 py-4">
                <Image src={callImg} alt="call Image" width={26} height={26}/>
                <p className="text-lg text-[#1f2937FF]">Call</p>
              </div>
              <div className="bg-[#f8fafcFF] border border-[#e9e9e9FF] rounded-lg flex flex-col justify-center items-center gap-2 py-4">
                <Image src={textImg} alt="call Image" width={26} height={26}/>
                <p className="text-lg text-[#1f2937FF]">Text</p>
              </div>
              <div className="bg-[#f8fafcFF] border border-[#e9e9e9FF] rounded-lg flex flex-col justify-center items-center gap-2 py-4">
                <Image src={videoImg} alt="call Image" width={26} height={26}/>
                <p className="text-lg text-[#1f2937FF]">Video</p>
              </div>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default CardDetails;
