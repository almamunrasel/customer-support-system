
import PendingTask from './PendingTask';

const PendingTasks = ({tasks,resolved,setResolved,handleResolve}) => {

  

 

  console.log(tasks);
  return (
   <div className='mt-3 '>
    { tasks.length>0 ?(tasks.map(task=> <PendingTask handleResolve={handleResolve} resolved={resolved} tasks={tasks} setResolved={setResolved}  task={task}></PendingTask>)) : <p className='bg-gray-100  rounded-xl text-center p-2'>Select a ticket to add to Task Status</p> }
   </div>

   
  );
};

export default PendingTasks;