import { Suspense, useState } from 'react';
import './App.css'
import CTickets from './Components/CTickets/CTickets';
import MainBanner from './Components/Mainbanner/MainBanner'
import Navbar from './Components/Navbar/Navbar'
import PendingTasks from './Components/PendingTask/PendingTasks';
import ResolvedTasks from './Components/ResolvedTask/ResolvedTasks';
  import { toast, ToastContainer } from 'react-toastify';
import Footer from './Components/Footer/Footer';

const fetchcTickets = async()=>{
  const res =await fetch('/issue.json');
  return res.json();
}

 const cTicketsPromises = fetchcTickets();
 


function App() {
 
  const [tasks,setTasks] = useState([]);
  const [resolved,setResolved] = useState([]);

  const [customertickets,setcustomerTickets]=useState([]);
   const handleResolve=(t)=>{

    setResolved([...resolved,t]);
    const filteredtask= tasks.filter(ply=>ply.title!==t.title);
    setTasks(filteredtask);
    const filteredTickets = customertickets.filter(ply=>ply.id !==t.id);
    setcustomerTickets(filteredTickets);
    toast('successfully completed task');
 }
  
return (
    <>
    <Navbar></Navbar> 
    <MainBanner tasks={tasks} resolved={resolved}></MainBanner>

    <div className='max-w-300 mx-auto mt-10 flex gap-5'>
      <div className='w-[70%]'>
        <h1 className='text-xl font-semibold '>Customer Tickets</h1>
        <Suspense fallback={<span className="loading loading-infinity loading-lg"></span>}>
          <CTickets cTicketsPromises={cTicketsPromises} tasks={tasks} setTasks={setTasks} customertickets={customertickets} setcustomerTickets={setcustomerTickets}  ></CTickets>
         </Suspense>

      </div>
      <div className='w-[30%]'>
         <h1 className='text-2xl font-semibold '>Task Status</h1>

         <PendingTasks resolved={resolved} setResolved={setResolved} handleResolve={handleResolve}  tasks={tasks}></PendingTasks>

         <h1 className='text-2xl font-semibold mt-20 '>Resolved Task</h1>
         <ResolvedTasks resolved={resolved}></ResolvedTasks>

      </div>
    </div>

    <div>
      <Footer></Footer>
    </div>
      <ToastContainer />
    </>
  )
}

export default App
