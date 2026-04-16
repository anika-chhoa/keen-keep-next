import React from 'react';
import { HashLoader, PuffLoader } from 'react-spinners';







const loading = () => {
    return (
        <div className="flex justify-center items-center my-20">
            <PuffLoader color='green'/>
            {/* <h1 className="text-6xl text-center h-screen">Loading.....</h1> */}
          </div>
    );
};

export default loading;