
import Banner from "./components/homepage/Banner";
import AllFriends from "./components/homepage/friendSection/AllFriends";
import FriendsCount from "./components/homepage/friendSection/FriendsCount";



export default function Home() {
  return (
    <div className="bg-[#f8fafcFF]">
      <div className="max-w-7xl mx-auto">
      <Banner/>
      <FriendsCount/>
      <AllFriends/>
    </div>
    </div>
  );
}
