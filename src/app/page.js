
import { Suspense } from "react";
import Banner from "./components/homepage/Banner";
import AllFriends from "./components/homepage/friendSection/AllFriends";
import FriendsCount from "./components/homepage/friendSection/FriendsCount";
import { PuffLoader } from "react-spinners";



export default function Home() {
  return (
    <div className="bg-[#f8fafcFF]">
      <div className="max-w-7xl mx-auto">
      <Banner/>
      <FriendsCount/>
      <Suspense fallback={<div className="flex justify-center items-center my-20"><PuffLoader color="green" /></div>}>

      <AllFriends/>
      </Suspense>
    </div>
    </div>
  );
}
