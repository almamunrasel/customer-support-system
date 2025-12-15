import React from 'react';


const ResolvedTask = ({resolv}) => {
  return (
    <div className='border border-gray-100 rounded-xl p-3  text-lg bg-green-200 mt-2'>
      <h1 className='text-center'>{resolv.title}</h1>
      <h2 className='text-center text-green-700 font-bold'>Completed</h2>
      
      
    </div>
  );
};

export default ResolvedTask;