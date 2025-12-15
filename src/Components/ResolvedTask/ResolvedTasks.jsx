import React from 'react';
import ResolvedTask from './ResolvedTask';

const ResolvedTasks = ({resolved}) => {

  console.log(resolved);
  return (
    <div className='mt-3 '>
    { resolved.length>0 ?(resolved.map(resolv=> <ResolvedTask resolv={resolv} ></ResolvedTask>)) : <p className='bg-[#E0E7FF] rounded-xl text-center p-2'>No resolved tasks yet</p> }
   </div>
  );
};

export default ResolvedTasks;