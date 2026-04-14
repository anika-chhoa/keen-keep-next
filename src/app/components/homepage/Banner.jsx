import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="mt-20 text-center flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-[#1f2937FF]">
        Friends to keep close in your life
      </h1>
      <p className="mt-4 text-slate-500">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br />
        relationships that matter most.
      </p>
      <button className="btn  rounded px-4 py-3 flex justify-center items-center gap-1 bg-[#244d3fFF] text-white mt-8">
        <div><FaPlus /></div>
        <p>Add a Friend</p>
      </button>
    </div>
  );
};

export default Banner;
