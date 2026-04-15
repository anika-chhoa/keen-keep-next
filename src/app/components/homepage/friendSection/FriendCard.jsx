import Image from "next/image";
import Link from "next/link";

const getStatusBg = (status) => {
  if (status === "Almost Due") return "bg-[#efad44]";
  if (status === "Overdue") return "bg-[#ef4444]";
  if (status === "On-Track") return "bg-[#244d3f]";
};

const FriendCard = ({ friend }) => {
  return (
    <Link
      href={`/friends/${friend.id}`}
      className="bg-white shadow-md rounded-lg text-center p-6 flex flex-col justify-center items-center"
    >
      <Image
        src={friend.picture}
        alt={friend.name}
        width={80}
        height={80}
        className="rounded-full mx-auto"
      />
      <p className="text-xl font-semibold mt-3">{friend.name}</p>
      <p className="text-slate-500 m-2 text-[12px] font-medium">
        <small>{friend.days_since_contact}d ago</small>
      </p>
      <div className="flex gap-2 justify-center items-center mb-2">
        {friend.tags.map((tag, ind) => {
          return (
            <div
              key={ind}
              className="p-2 bg-[#cbfadbFF] rounded-[100px] text-[#244d3fFF] uppercase text-[12px] font-medium"
            >
              <small>{tag}</small>
            </div>
          );
        })}
      </div>
      <div
        className={`p-2 rounded-[100px] text-white text-[12px] font-medium ${getStatusBg(friend.status)} `}
      >
        {friend.status}
      </div>
    </Link>
  );
};

export default FriendCard;
