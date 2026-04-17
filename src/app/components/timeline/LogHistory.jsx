"use client";
import { HistoryContext } from "@/app/context/HistoryContext";
import { useContext, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Logs from "./Logs";
import NoData from "./NoData";

const LogHistory = () => {
  const { logHistory } = useContext(HistoryContext);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const filteredLogs =
    filter === "all"
      ? logHistory
      : logHistory.filter((log) => log.type === filter);
  const filteredLogsBySearch = filteredLogs.filter((log) =>
    log.name.toLowerCase().includes(search.toLowerCase()),
  );
  const filteredLogsByTime = [...filteredLogsBySearch].sort((a, b) => {
    const timeA = new Date(a.time).getTime();
    const timeB = new Date(b.time).getTime();

    return sortOrder === "newest" ? timeB - timeA : timeA - timeB;
  });
  const handleFilter = (value) => {
    document.activeElement.blur();
    setFilter(value);
  };
  return (
    <div>
      <div className="space-y-4 md:space-y-0 md:flex md:justify-between">
        <div className="flex">
          <div className="dropdown dropdown-bottom mr-2">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 w-3xs lg:w-[350px] flex justify-between text-slate-500 text-lg"
            >
              <p>{filter === "all" ? "Filter Timeline" : filter}</p>
              <div>
                <FaChevronDown />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li
                onClick={() => handleFilter("all")}
                className="text-slate-500 text-lg"
              >
                <a>All</a>
              </li>
              <li
                onClick={() => handleFilter("Call")}
                className="text-slate-500 text-lg"
              >
                <a>Call</a>
              </li>
              <li
                onClick={() => handleFilter("Text")}
                className="text-slate-500 text-lg"
              >
                <a>Text</a>
              </li>
              <li
                onClick={() => setFilter("Video")}
                className="text-slate-500 text-lg"
              >
                <a>Video Call</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-gray-200 px-3 py-2 rounded text-slate-500 text-lg font-semibold bg-gray-100"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
        <input
          type="text"
          placeholder="Search Friend Timeline"
          className="input input-bordered w-full lg:w-72"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="space-y-6 my-6">
        {filteredLogsByTime.length === 0 ? (
          <NoData />
        ) : (
          filteredLogsByTime.map((log, ind) => <Logs key={ind} log={log} />)
        )}
      </div>
    </div>
  );
};

export default LogHistory;
