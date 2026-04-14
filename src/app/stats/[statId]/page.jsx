const CardDetails = async ({ params }) => {
  const { friendId } = await params;
  console.log(friendId, "params");
  return (
    <div>
      <p className="text-6xl">Card Details</p>
    </div>
  );
};

export default CardDetails;