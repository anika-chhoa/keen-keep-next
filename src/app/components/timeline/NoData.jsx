import Link from "next/link";
import { FiInbox } from "react-icons/fi";

const NoData = () => {
  return (
    <div className="flex items-center justify-center py-6">
      <div className="backdrop-blur-md bg-white/70 border border-slate-200 shadow-lg rounded-2xl py-20 text-center w-full">
        <div className="flex justify-center mb-4">
          <div className="bg-slate-100 p-5 rounded-full">
            <FiInbox className="text-4xl text-slate-500" />
          </div>
        </div>

        <h2 className="text-xl font-semibold text-slate-700">No Data Found</h2>

        <p className="text-slate-500 mt-2 text-sm">There are no logs for this filter yet.</p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-6 px-5 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NoData;
