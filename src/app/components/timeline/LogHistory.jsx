"use client";
import { HistoryContext } from "@/app/context/HistoryContext";
import { useContext, useState } from "react";
import Logs from "./Logs";
import { FaChevronDown } from "react-icons/fa";



const LogHistory = () => {
  const { logHistory } = useContext(HistoryContext);
  const [filter,setFilter]=useState("all");
  const filteredLogs =
    filter === "all"
      ? logHistory
      : logHistory.filter((log) => log.type === filter);
      const handleFilter=(filter)=>{

        document.activeElement.blur();
        setFilter(filter)
      }
  return (
    <div >
      <div className="dropdown dropdown-bottom">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 w-3xs lg:w-[350px] flex justify-between text-slate-500 text-lg"
        >
          <p>{filter === "all"
        ? "Filter Timeline"
        : filter}</p>
          <div>
            <FaChevronDown />
          </div>
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={()=>handleFilter("all")} className="text-slate-500 text-lg">
            <a>All</a>
          </li>
          <li onClick={()=>handleFilter("Call")} className="text-slate-500 text-lg">
            <a>Call</a>
          </li>
          <li onClick={()=>handleFilter("Text")} className="text-slate-500 text-lg">
            <a>Text</a>
          </li>
          <li onClick={()=>setFilter("Video")} className="text-slate-500 text-lg">
            <a>Video Call</a>
          </li>
        </ul>
      </div>
      <div className="space-y-6 my-6">
        {filteredLogs.map((log, ind) => (
        <Logs key={ind} log={log} />
      ))}
      </div>
    </div>
  );
};

export default LogHistory;
