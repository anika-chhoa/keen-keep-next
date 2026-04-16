import { PuffLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="flex justify-center items-center my-20">
      <PuffLoader color="green" />
    </div>
  );
};

export default loading;
