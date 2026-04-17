import LogHistory from "../components/timeline/LogHistory";

export const metadata = {
  title: "Keen-keeper | Timeline",
  description: "Friends timeline",
};

const Timeline = () => {
  return (
    <div className="bg-[#f8fafcFF]">
      <div className="max-w-7xl mx-auto my-20">
        <h1 className="text-5xl text-[#1f2937FF] font-bold text-left mb-6">
          TimeLine
        </h1>
        <div>
          <LogHistory />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
