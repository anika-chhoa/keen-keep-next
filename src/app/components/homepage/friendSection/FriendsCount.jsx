

const FriendsCount = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 pb-10 border-b border-[#e9e9e9FF]'>
            <div className='p-6 lg:p-8 rounded-lg bg-white shadow-md text-center'>
                <p className='text-[#1f2937FF] text-[32px] font-semibold'>10</p>
                <p className='text-slate-500 text-lg mt-2'>Total Friends</p>
            </div>
            <div className='p-6 lg:p-8 rounded-lg bg-white shadow-md text-center'>
                <p className='text-[#1f2937FF] text-[32px] font-semibold'>3</p>
                <p className='text-slate-500 text-lg mt-2'>On Track</p>
            </div>
            <div className='p-6 lg:p-8 rounded-lg bg-white shadow-md text-center'>
                <p className='text-[#1f2937FF] text-[32px] font-semibold'>6</p>
                <p className='text-slate-500 text-lg mt-2'>Need Attention</p>
            </div>
            <div className='p-6 lg:p-8 rounded-lg bg-white shadow-md text-center'>
                <p className='text-[#1f2937FF] text-[32px] font-semibold'>12</p>
                <p className='text-slate-500 text-lg mt-2'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default FriendsCount;