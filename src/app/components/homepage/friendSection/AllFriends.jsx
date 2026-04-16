import FriendCard from "./FriendCard";

const friendsPromise = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};

const AllFriends =async () => {
  const friends = await friendsPromise();

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-semibold text-[#1f2937FF] mb-4">
        Your Friends
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">

        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default AllFriends;
