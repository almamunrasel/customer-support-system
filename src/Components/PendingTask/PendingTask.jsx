import React from 'react';

const PendingTask = ({task,handleResolve}) => {

//   const handleResolve=(t)=>{
//     setResolved([...resolved,t]);

//     const filteredTasks = tasks.filter(ply =>ply.title!==t.title);


// }







  return (
    <div className='border border-gray-100 rounded-xl p-3 font-semibold text-lg bg-gray-100 mt-2'>
      <h1 className='text-center'>{task.title}</h1>
      <button onClick={()=>handleResolve(task)}  className="w-full bg-[#02A53B] text-white p-1 mt-3 rounded-2xl cursor-pointer transition duration-300 transform hover:scale-105">Complete</button>
      
    </div>
  );
};

export default PendingTask;