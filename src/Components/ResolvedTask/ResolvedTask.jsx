import React from 'react';

const ResolvedTask = ({resolv}) => {
  return (
    <div className='border border-gray-100 rounded-xl p-3 font-semibold text-lg bg-[#E0E7FF] mt-2'>
      <h1 className='text-center'>{resolv.title}</h1>
      
      
    </div>
  );
};

export default ResolvedTask;