const friendsPromise = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};

const CardDetails = async ({ params }) => {
  const friends = await friendsPromise();
  const { id } = await params;
  const expectedFriend=friends.find(friend=>friend.id===Number(id));
  
  
  return (
    <div>
      
    </div>
  );
};

export default CardDetails;
